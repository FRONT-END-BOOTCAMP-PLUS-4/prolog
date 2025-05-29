import {
  PostListAllRepository,
  GetPostListAllFilter,
} from '../domain/PostListAllRepository';
import prisma from '@/shared/lib/prisma';

type BlogPostWhereInput = {
  user?: {
    name?: { contains: string; mode: 'insensitive' };
  };
  OR?: Array<{
    tags?: { hasSome: string[] };
    title?: { contains: string; mode: 'insensitive' };
    content?: { contains: string; mode: 'insensitive' };
  }>;
};

type OrCondition = {
  tags?: { hasSome: string[] };
  title?: { contains: string; mode: 'insensitive' };
  content?: { contains: string; mode: 'insensitive' };
};

export class PrPostListAllRepository implements PostListAllRepository {
  async findAll(filters: GetPostListAllFilter) {
    try {
      const orConditions: OrCondition[] = [];

      // 태그
      if (filters.tags && filters.tags.length > 0) {
        orConditions.push({ tags: { hasSome: filters.tags } });
      }

      // 타이틀
      if (filters.title) {
        orConditions.push({
          title: { contains: filters.title, mode: 'insensitive' },
        });
      }

      // 게시글
      if (filters.content) {
        orConditions.push({
          content: { contains: filters.content, mode: 'insensitive' },
        });
      }

      // 이름
      const where: BlogPostWhereInput = {};
      if (filters.name) {
        where.user = {
          name: { contains: filters.name, mode: 'insensitive' },
        };
      }
      if (orConditions.length > 0) {
        where.OR = orConditions;
      }

      const result = await prisma.blogPost.findMany({
        where,
        include: {
          // likes: { select: { id: true } },
          // notification: { select: { id: true } },
          user: { select: { id: true, name: true, profileImg: true } },
        },
      });

      return result;
    } catch (error) {
      console.error('Repository Error:', error);
      throw error;
    }
  }
}
