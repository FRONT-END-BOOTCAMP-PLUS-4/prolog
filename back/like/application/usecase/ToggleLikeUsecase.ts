import { ToggleLikeDto } from '../dto/ToggleLikeDto';
import { ToggleLikeRepository } from '../../domain/ToggleLikeRepository';

export class ToggleLikeUseCase {
  constructor(private likeRepo: ToggleLikeRepository) {}

  async execute(userId: string, postId: number) {
    const dto = new ToggleLikeDto(userId, postId);

    const existing = await this.likeRepo.findLike(dto);
    if (existing) {
      await this.likeRepo.deleteLike(dto);
      const likeCount = await this.likeRepo.countLikes(dto.postId);
      return { liked: false, likeCount };
    }
    await this.likeRepo.createLike(dto);
    const likeCount = await this.likeRepo.countLikes(dto.postId);
    return { liked: true, likeCount };
  }
}
