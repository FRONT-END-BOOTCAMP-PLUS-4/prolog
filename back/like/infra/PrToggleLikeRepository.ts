import { ToggleLikeRepository } from '../domain/ToggleLikeRepository';
import { ToggleLikeDto } from '../application/dto/ToggleLikeDto';

import { PostLike } from '@/app/generated/prisma';
import prisma from '@/shared/lib/prisma';

export class PrToggleLikeRepository implements ToggleLikeRepository {
  async findLike(dto: ToggleLikeDto): Promise<PostLike | null> {
    return prisma.postLike.findFirst({
      where: {
        postsId: dto.postId,
        userId: dto.userId,
      },
    });
  }

  async createLike(dto: ToggleLikeDto): Promise<PostLike> {
    return prisma.postLike.create({
      data: {
        postsId: dto.postId,
        userId: dto.userId,
      },
    });
  }

  async deleteLike(dto: ToggleLikeDto): Promise<void> {
    await prisma.postLike.deleteMany({
      where: {
        postsId: dto.postId,
        userId: dto.userId,
      },
    });
  }

  async countLikes(postId: number): Promise<number> {
    return prisma.postLike.count({
      where: { postsId: postId },
    });
  }
}
