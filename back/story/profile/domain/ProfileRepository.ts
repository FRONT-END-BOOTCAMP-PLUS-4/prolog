import { User } from '@/app/generated/prisma';

export interface ProfileRepository {
  findById(userId: string): Promise<User>;
}
