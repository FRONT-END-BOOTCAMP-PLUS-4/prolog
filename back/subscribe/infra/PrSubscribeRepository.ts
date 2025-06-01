import prisma from '@/shared/lib/prisma';

import { SubscribeRepository } from '../domain/SubscribeRepository';

export class PrSubscribeRepository implements SubscribeRepository {
  async findFollowersByUserId(userId: string): Promise<string[]> {
    const subscribe = await prisma.subscribe.findMany({
      where: {
        responseId: userId, // 나를 구독한 사람들
      },
    });

    return subscribe.map((sub) => sub.requestId);
  }
}
