import { BlogPost } from '@/app/generated/prisma';

export type GetPostListAllFilter = {
  name?: string;
  tags?: string[];
  title?: string;
  content?: string;
};

export type PostListAllRepository = {
  findAll(filters: GetPostListAllFilter): Promise<
    (BlogPost & {
      // likes: { id: number }[];
      // notification: { id: number }[];
      user: { id: string; name: string; profileImg?: string | null };
    })[]
  >;
};
