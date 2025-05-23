import { PostsDraftRepository } from '../domain/PostsDraftRepository';
import { PostTemp, PrismaClient } from '../../../app/generated/prisma';

const prisma = new PrismaClient();

export class PrPostDraftRepository implements PostsDraftRepository {
  async findAll(userId: string): Promise<PostTemp[]> {
    const postsDraftList = await prisma.postTemp.findMany({
      where: {
        userId,
      },
    });

    return postsDraftList;
  }

  async deleteById(draftId: number): Promise<void> {
    await prisma.postTemp.delete({
      where: {
        id: draftId,
      },
    });
  }
}
