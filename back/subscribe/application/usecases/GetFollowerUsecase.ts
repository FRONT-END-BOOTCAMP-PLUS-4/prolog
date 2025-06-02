import {
  FollowersResponse,
  SubscriptionRepository,
} from '../../domain/SubscribeRepository';
export class GetFollowersUsecase {
  constructor(private subscriptionRepository: SubscriptionRepository) {}

  async execute(userId: string): Promise<FollowersResponse> {
    const responseUser =
      await this.subscriptionRepository.findFollowersByUserId(userId);
    return {
      users: responseUser.users,
      totalCount: responseUser.totalCount,
    };
  }
}
