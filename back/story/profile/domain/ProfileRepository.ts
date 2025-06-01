import { User } from '@/app/generated/prisma';

export interface ProfileRepository {
  findById(email: string): Promise<User>;
}
