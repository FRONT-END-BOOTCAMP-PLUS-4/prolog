import prisma from '@/shared/lib/prisma';

import { ProfileRepository } from '../domain/ProfileRepository';
import { User } from '@/app/generated/prisma';

export class PrProfileRepository implements ProfileRepository {
  async findById(userId: string): Promise<User> {
    const userData = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!userData) {
      throw new Error('User not found');
    }
    return userData;
  }
}
