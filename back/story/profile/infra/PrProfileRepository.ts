import prisma from '@/shared/lib/prisma';

import { ProfileRepository } from '../domain/ProfileRepository';
import { User } from '@/app/generated/prisma';

export class PrProfileRepository implements ProfileRepository {
  async findById(email: string): Promise<User> {
    const userData = await prisma.user.findFirst({
      where: {
        // Replace 'id' with the actual unique field you want to query by
        name: email,
      },
    });
    if (!userData) {
      throw new Error('User not found');
    }
    return userData;
  }
}
