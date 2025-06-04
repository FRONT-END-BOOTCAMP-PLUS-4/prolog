import { BlogPost } from '@/app/generated/prisma';

export type GetPostByUserFilter = {
  targetUserId: string;
  tags?: string[];
  title?: string;
  content?: string;
  page?: number;
  pageSize?: number;
  sort?: 'latest' | 'popular' | 'bookMark';
  isMyPage?: boolean;
};

export type BlogPostOrderBy =
  | { likes: { _count: 'desc' | 'asc' } }
  | { createdAt: 'desc' | 'asc' };

export type BlogPostWithCounts = BlogPost & {
  user: { id: string; name: string; profileImg?: string | null };
  _count: { likes: number; comments: number };
};

export type BlogPostByUserWhereInput = {
  userId?: string;
  OR?: Array<OrCondition>;
  isPublic?: number;
  bookMark?: {
    some: {
      userId: string;
    };
  };
};

export type OrCondition = {
  tags?: { hasSome: string[] };
  title?: { contains: string; mode: 'insensitive' };
  content?: { contains: string; mode: 'insensitive' };
};

export interface PostByUserRepository {
  findByUserId(
    filters: GetPostByUserFilter,
    currentUserId: string,
  ): Promise<{
    posts: BlogPostWithCounts[];
    totalCount: number;
    likedPostIds: number[];
  }>;
}
