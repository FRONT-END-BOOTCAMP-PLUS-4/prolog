import { BlogPost } from '@/app/generated/prisma';

export type GetPostListAllFilter = {
  name?: string;
  tags?: string[];
  title?: string;
  content?: string;
  page?: number;
  pageSize?: number;
  sort?: 'latest' | 'popular';
};

export type BlogPostWithCounts = BlogPost & {
  user: { id: string; name: string; profileImg?: string | null };
  _count: { likes: number; comments: number };
};

export type PostListAllRepository = {
  findAll(filters: GetPostListAllFilter): Promise<{
    posts: BlogPostWithCounts[];
    totalCount: number;
  }>;
};
