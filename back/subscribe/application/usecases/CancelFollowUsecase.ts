import { FollowRepository } from '../../domain/FollowRepository';
import {
  CancelFollowRequestDto,
  CancelFollowResponseDto,
} from '../dto/CancelFollowRequestDto';

export class CancelFollowUsecase {
  constructor(private followRepository: FollowRepository) {}

  async execute(dto: CancelFollowRequestDto): Promise<CancelFollowResponseDto> {
    try {
      const { requestId, responseId } = dto;

      const existingFollow =
        await this.followRepository.findByRequestAndResponse(
          requestId,
          responseId,
        );

      if (!existingFollow) {
        throw new Error('팔로우 관계가 존재하지 않습니다.');
      }

      await this.followRepository.deleteByRequestAndResponse(
        requestId,
        responseId,
      );

      return {
        success: true,
        message: '언팔로우가 완료되었습니다.',
      };
    } catch (error) {
      console.error('Error unfollowing user:', error);
      throw new Error(
        error instanceof Error ? error.message : 'Failed to unfollow user',
      );
    }
  }
}
