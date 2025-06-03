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
    try {
      const orConditions: OrCondition[] = [];

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

      // 특정 유저의 게시글만 조회
      const where: BlogPostByUserWhereInput = {
        userId: filters.targetUserId,
      };

      // 공개/비공개 로직 - 핵심 부분!
      const isMyPage = filters.isMyPage ?? false;
      if (isMyPage && filters.targetUserId === currentUserId) {
        // 내 페이지: 공개/비공개 모두 조회
      } else {
        // 다른 유저 페이지: 공개만 조회
        where.isPublic = 1;
      }

      if (orConditions.length > 0) {
        where.OR = orConditions;
      }

      // 페이지네이션
      const page = filters.page ?? 1;
      const pageSize = filters.pageSize ?? 20;
      const skip = (page - 1) * pageSize;
      const take = pageSize;

      // 정렬 조건
      let orderBy: BlogPostOrderBy[];
      switch (filters.sort) {
        case 'popular':
          orderBy = [{ likes: { _count: 'desc' } }, { createdAt: 'desc' }];
          break;
        default:
          orderBy = [{ createdAt: 'desc' }];
          break;
      }

      // 게시글 목록과 전체 개수 동시 조회
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

      // 게시글 id 배열
      const postIds = posts.map((post) => post.id);

      // 현재 유저가 좋아요 누른 게시글 id 목록
      let likedPostIds: number[] = [];
      if (currentUserId && postIds.length > 0) {
        const likes = await prisma.postLike.findMany({
          where: {
            postsId: { in: postIds },
            userId: currentUserId,
          },
          select: { postsId: true },
        });
        likedPostIds = likes.map((like) => like.postsId);
      }

      return { posts, totalCount, likedPostIds };
    } catch (error) {
      console.error('Repository Error:', error);
      throw error;
    }
  }
}
