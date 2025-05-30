import prisma from '@/shared/lib/prisma';

import { ProfileRepository } from '../domain/ProfileRepository';
import { User } from '@/app/generated/prisma';

export class PrProfileRepository implements ProfileRepository {
  async findById(clientEmail: string): Promise<User> {
    const userData = await prisma.user.findUnique({
      where: {
        email: clientEmail,
      },
    });
    if (!userData) {
      throw new Error('User not found');
    }
    return userData;
  }
}
