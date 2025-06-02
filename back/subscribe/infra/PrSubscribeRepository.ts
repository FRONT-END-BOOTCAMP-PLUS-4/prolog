import prisma from '@/shared/lib/prisma';

import {
  FollowersResponse,
  FollowingResponse,
  SubscriptionRepository,
  UserInfo,
} from '../domain/SubscribeRepository';

export class PrSubscribeRepository implements SubscriptionRepository {
  // 공통 쿼리 로직
  private async findUsersBySubscription(
    whereClause: object,
    includeField: 'requestSubscribe' | 'responseSubscribe',
  ): Promise<UserInfo[]> {
    const subscribes = await prisma.subscribe.findMany({
      where: whereClause,
      include: {
        [includeField]: {
          select: {
            id: true,
            name: true,
            profileImg: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return subscribes.map((sub) => {
      const user = sub[includeField] as {
        id: string;
        name: string;
        profileImg: string | null;
      };
      return {
        id: user.id,
        name: user.name,
        profileImg: user.profileImg,
      };
    });
  }

  // 공통 카운트 로직
  async countBySubscription(whereClause: object): Promise<number> {
    return prisma.subscribe.count({ where: whereClause });
  }

  async findFollowersByUserId(userId: string): Promise<FollowersResponse> {
    const whereClause = { responseId: userId };

    const [users, totalCount] = await Promise.all([
      this.findUsersBySubscription(whereClause, 'requestSubscribe'),
      this.countBySubscription(whereClause),
    ]);

    return {
      users,
      totalCount,
    };
  }

  async findFollowingByUserId(userId: string): Promise<FollowingResponse> {
    const whereClause = { requestId: userId };

    const [users, totalCount] = await Promise.all([
      this.findUsersBySubscription(whereClause, 'responseSubscribe'),
      this.countBySubscription(whereClause),
    ]);

    return {
      users,
      totalCount,
    };
  }
}
