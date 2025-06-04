import { BlogPostWhereInput } from '@/back/posts/domain/PostListAllRepository';
import {
  BlogPostByUserWhereInput,
  BlogPostOrderBy,
  BlogPostWithCounts,
  GetPostByUserFilter,
  OrCondition,
  PostByUserRepository,
} from '../domain/PostByUserRepository';
import prisma from '@/shared/lib/prisma';
export class PrPostByUserRepository implements PostByUserRepository {
  async findByUserId(
    filters: GetPostByUserFilter,
    currentUserId: string,
  ): Promise<{
    posts: BlogPostWithCounts[];
    totalCount: number;
    likedPostIds: number[];
  }> {
    const orConditions: OrCondition[] = [];

    if (filters.sort === 'bookMark' && currentUserId) {
      const bookmarkOwnerId =
        filters.targetUserId === currentUserId
          ? currentUserId
          : filters.targetUserId;

      const whereBookmarkOnly: BlogPostByUserWhereInput = {
        bookMark: {
          some: { userId: bookmarkOwnerId },
        },
      };

      if (orConditions.length > 0) {
        whereBookmarkOnly.OR = orConditions;
      }

      const page = filters.page ?? 1;
      const pageSize = filters.pageSize ?? 20;
      const skip = (page - 1) * pageSize;
      const take = pageSize;

      const orderBy: BlogPostOrderBy[] = [{ createdAt: 'desc' }];

      const [posts, totalCount] = await Promise.all([
        prisma.blogPost.findMany({
          where: whereBookmarkOnly,
          include: {
            user: { select: { id: true, name: true, profileImg: true } },
            _count: { select: { likes: true, comments: true } },
          },
          orderBy,
          skip,
          take,
        }),
        prisma.blogPost.count({ where: whereBookmarkOnly }),
      ]);

      const likedPostIds: number[] = [];

      return { posts, totalCount, likedPostIds };
    }

    const where: BlogPostByUserWhereInput = {
      userId: filters.targetUserId,
    };
    // 태그 필터
    if (filters.tags && filters.tags.length > 0) {
      orConditions.push({ tags: { hasSome: filters.tags } });
    }

    // 타이틀 필터
    if (filters.title) {
      orConditions.push({
        title: { contains: filters.title, mode: 'insensitive' },
      });
    }

    // 게시글 내용 필터
    if (filters.content) {
      orConditions.push({
        content: { contains: filters.content, mode: 'insensitive' },
      });
    }

    // 유저 이름 필터
    if (filters.name) {
      where.user = {
        name: { contains: filters.name, mode: 'insensitive' },
      };
    }

    if (orConditions.length > 0) {
      where.OR = orConditions;
    }
    const isMyPage = filters.isMyPage ?? false;
    if (!(isMyPage && filters.targetUserId === currentUserId)) {
      where.isPublic = 1;
    }

    const page = filters.page ?? 1;
    const pageSize = filters.pageSize ?? 20;
    const skip = (page - 1) * pageSize;
    const take = pageSize;

    let orderBy: BlogPostOrderBy[];
    switch (filters.sort) {
      case 'popular':
        orderBy = [{ likes: { _count: 'desc' } }, { createdAt: 'desc' }];
        break;
      default:
        orderBy = [{ createdAt: 'desc' }];
        break;
    }

    const [posts, totalCount] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        include: {
          user: { select: { id: true, name: true, profileImg: true } },
          _count: { select: { likes: true, comments: true } },
        },
        orderBy,
        skip,
        take,
      }),
      prisma.blogPost.count({ where }),
    ]);

    let likedPostIds: number[] = [];
    const postIds = posts.map((p) => p.id);
    if (currentUserId && postIds.length > 0) {
      const likes = await prisma.postLike.findMany({
        where: {
          postsId: { in: postIds },
          userId: currentUserId,
        },
        select: { postsId: true },
      });
      likedPostIds = likes.map((l) => l.postsId);
    }

    return { posts, totalCount, likedPostIds };
  }
}
