import { FollowRepository } from '../../domain/FollowRepository';
export class CheckFollowStatusUsecase {
  constructor(private readonly followRepo: FollowRepository) {}

  async execute(requestId: string, responseId: string): Promise<boolean> {
    return await this.followRepo.existsByRequestAndResponse(
      requestId,
      responseId,
    );
  }
}
