import {
  FollowingResponse,
  SubscriptionRepository,
} from '../../domain/SubscribeRepository';

export class GetFollowingUsecase {
  constructor(private subscriptionRepository: SubscriptionRepository) {}

  async execute(userId: string): Promise<FollowingResponse> {
    const requestUser =
      await this.subscriptionRepository.findFollowingByUserId(userId);
    return {
      users: requestUser.users,
      totalCount: requestUser.totalCount,
    };
  }
}
