import { PostTemp } from '@/app/generated/prisma';

export interface PostsDraftRepository {
  findAll(userId: string): Promise<PostTemp[]>;
}
