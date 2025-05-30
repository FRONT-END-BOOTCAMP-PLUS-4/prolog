import { BlogPost } from '@/app/generated/prisma';

export interface GetPostListAllFilter {
  name?: string;
  tags?: string[];
  title?: string;
  content?: string;
}

export interface PostListAllRepository {
  findAll(filters: GetPostListAllFilter): Promise<
    (BlogPost & {
      // likes: { id: number }[];
      // notification: { id: number }[];
      user: { id: string; name: string; profileImg?: string | null };
    })[]
  >;
}
