import { ToggleLikeDto } from '../application/dto/ToggleLikeDto';

import { PostLike } from '@/app/generated/prisma';

export interface ToggleLikeRepository {
  findLike(dto: ToggleLikeDto): Promise<PostLike | null>;
  createLike(dto: ToggleLikeDto): Promise<PostLike>;
  deleteLike(dto: ToggleLikeDto): Promise<void>;
  countLikes(postId: number): Promise<number>;
}
