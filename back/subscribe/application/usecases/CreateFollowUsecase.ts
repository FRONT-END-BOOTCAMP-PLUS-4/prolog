import { FollowRepository } from '../../domain/FollowRepository';
import {
  CreateFollowRequestDto,
  CreateFollowResponseDto,
} from '../dto/CreateFollowRequestDto';
export class CreateFollowUsecase {
  constructor(private followRepository: FollowRepository) {}

  async execute(dto: CreateFollowRequestDto): Promise<CreateFollowResponseDto> {
    try {
      const { requestId, responseId } = dto;

      if (requestId === responseId) {
        throw new Error('자기 자신을 팔로우할 수 없습니다.');
      }

      const existingFollow =
        await this.followRepository.existsByRequestAndResponse(
          requestId,
          responseId,
        );

      if (existingFollow) {
        throw new Error('이미 팔로우 중입니다.');
      }

      const newFollow = await this.followRepository.create(
        requestId,
        responseId,
      );

      return {
        success: true,
        message: '팔로우가 완료되었습니다.',
        followId: newFollow.id,
      };
    } catch (error) {
      console.error('Error creating follow:', error);
      throw new Error(
        error instanceof Error ? error.message : 'Failed to follow user',
      );
    }
  }
}
