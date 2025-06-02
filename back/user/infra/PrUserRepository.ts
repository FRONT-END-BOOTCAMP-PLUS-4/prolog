import { UserRepository } from '../domain/UserRepository';
import prisma from '@/shared/lib/prisma';

export class PrUserRepository implements UserRepository {
  async getUserIdByName(username: string): Promise<string | null> {
    const user = await prisma.user.findFirst({
      where: { name: username },
      select: { id: true },
    });

    return user?.id ?? null;
  }
}
