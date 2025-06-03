import prisma from '@/shared/lib/prisma';
import { BookmarkDto } from '../application/dto/BookmarkDto';
import { BookmarkRepository } from '../domain/BookmarkRepository';

export class PrBookmarkRepository implements BookmarkRepository {
  async toggleBookmark({ userId, postId, bookmarked }: BookmarkDto) {
    const exists = await prisma.bookMark.findFirst({
      where: { userId, postsId: postId },
    });

    if (bookmarked && !exists) {
      await prisma.bookMark.create({
        data: {
          userId,
          postsId: postId,
        },
      });
    } else if (!bookmarked && exists) {
      await prisma.bookMark.delete({
        where: {
          id: exists.id,
        },
      });
    }
  }
}
