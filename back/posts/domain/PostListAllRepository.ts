import { BlogPost } from '@/app/generated/prisma';

// 필터
export type GetPostListAllFilter = {
  name?: string;
  tags?: string[];
  title?: string;
  content?: string;
  page?: number;
  pageSize?: number;
  sort?: 'latest' | 'popular';
};

// 정렬
export type BlogPostOrderBy =
  | { likes: { _count: 'desc' | 'asc' } }
  | { createdAt: 'desc' | 'asc' };

// 유저 정보와 좋아요/댓글 수가 포함된 게시글
export type BlogPostWithCounts = BlogPost & {
  user: { id: string; name: string; profileImg?: string | null };
  _count: { likes: number; comments: number };
};

// Prisma where 조건
export type BlogPostWhereInput = {
  user?: {
    name?: { contains: string; mode: 'insensitive' };
  };
  OR?: Array<OrCondition>;
  isPublic?: number;
};

// OR 조건에 사용되는 필드별 검색
export type OrCondition = {
  tags?: { hasSome: string[] };
  title?: { contains: string; mode: 'insensitive' };
  content?: { contains: string; mode: 'insensitive' };
};

export interface PostListAllRepository {
  findAll(filters: GetPostListAllFilter): Promise<{
    posts: BlogPostWithCounts[];
    totalCount: number;
  }>;
}
