import { SubscribeRepository } from '../../domain/SubscribeRepository';

export class GetFollowerUsecase {
  constructor(private readonly subscribeRepository: SubscribeRepository) {}

  async execute(userId: string) {
    try {
      const followerList =
        await this.subscribeRepository.findFollowersByUserId(userId);

      return followerList;
    } catch (error) {
      console.error('Error fetching follower list:', error);
      throw new Error('Failed to fetch follower list');
    }
  }
}
