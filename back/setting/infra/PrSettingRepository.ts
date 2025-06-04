import prisma from '@/shared/lib/prisma';
import { SettingRepository } from '../domain/SettingRepository';
import {
  UpdateUserProfileDto,
  UserProfileResponseDto,
} from '../application/dto/SettingDto';

export class PrSettingRepository implements SettingRepository {
  async getUserProfile(userId: string): Promise<UserProfileResponseDto | null> {
    return await prisma.user.findUnique({
      where: {
        id: userId,
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        profileImg: true,
        introduction: true,
        backgroundImg: true,
        provider: true,
        createdAt: true,
      },
    });
  }

  async findUserByName(name: string): Promise<UserProfileResponseDto | null> {
    return await prisma.user.findUnique({
      where: { name, deletedAt: null },
      select: {
        id: true,
        name: true,
        email: true,
        profileImg: true,
        introduction: true,
        backgroundImg: true,
        provider: true,
        createdAt: true,
      },
    });
  }

  async updateUserProfile(
    userId: string,
    data: UpdateUserProfileDto,
  ): Promise<UserProfileResponseDto> {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
        deletedAt: null,
      },
      data: {
        ...data,
      },
      select: {
        id: true,
        name: true,
        email: true,
        profileImg: true,
        introduction: true,
        backgroundImg: true,
        provider: true,
        createdAt: true,
      },
    });

    return updatedUser;
  }

  async deleteUser(userId: string): Promise<void> {
    await prisma.$transaction(async (tx) => {
      await tx.comment.deleteMany({ where: { userId } });
      await tx.bookMark.deleteMany({ where: { userId } });
      await tx.postLike.deleteMany({ where: { userId } });
      await tx.notification.deleteMany({
        where: {
          OR: [{ senderId: userId }, { receiverId: userId }],
        },
      });
      await tx.subscribe.deleteMany({
        where: {
          OR: [{ requestId: userId }, { responseId: userId }],
        },
      });
      await tx.blogPost.deleteMany({ where: { userId } });
      await tx.category.deleteMany({ where: { userId } });
      await tx.postTemp.deleteMany({ where: { userId } });
      await tx.user.delete({ where: { id: userId } });
    });
  }

  async softDeleteUser(userId: string): Promise<void> {
    await prisma.user.update({
      where: { id: userId },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
