import prisma from '@/shared/lib/prisma';
import { SubscribePostRepository } from '../domain/SubscribePostRepository';

export class PrSubscribePostRepository implements SubscribePostRepository {
  async findFollowersByUserId(userId: string): Promise<string[]> {
    const subscribe = await prisma.subscribe.findMany({
      where: {
        responseId: userId, // 나를 구독한 사람들
      },
    });

    return subscribe.map((sub) => sub.requestId);
  }
}
