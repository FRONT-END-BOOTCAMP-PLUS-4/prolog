import prisma from '@/shared/lib/prisma';
import { FollowRepository } from '../domain/FollowRepository';
import { Subscribe } from '@/app/generated/prisma';

export class PrFollowRepository implements FollowRepository {
  async findByRequestAndResponse(
    requestId: string,
    responseId: string,
  ): Promise<Subscribe | null> {
    const followData = await prisma.subscribe.findFirst({
      where: {
        requestId: requestId,
        responseId: responseId,
      },
    });

    return followData;
  }

  async deleteByRequestAndResponse(
    requestId: string,
    responseId: string,
  ): Promise<void> {
    const deleteResult = await prisma.subscribe.deleteMany({
      where: {
        requestId: requestId,
        responseId: responseId,
      },
    });

    if (deleteResult.count === 0) {
      throw new Error('언팔로우할 팔로우 관계를 찾을 수 없습니다.');
    }
  }

  async create(requestId: string, responseId: string): Promise<Subscribe> {
    const newFollow = await prisma.subscribe.create({
      data: {
        requestId: requestId,
        responseId: responseId,
      },
    });

    return newFollow;
  }

  async existsByRequestAndResponse(
    requestId: string,
    responseId: string,
  ): Promise<boolean> {
    const count = await prisma.subscribe.count({
      where: {
        requestId: requestId,
        responseId: responseId,
      },
    });

    return count > 0;
  }
}
