import {
  FollowingResponse,
  SubscriptionRepository,
} from '../../domain/SubscriptionRepository';

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
