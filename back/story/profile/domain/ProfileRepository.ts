import { User } from '@/app/generated/prisma';

export interface ProfileRepository {
  findById(clientEmail: string): Promise<User>;
}
