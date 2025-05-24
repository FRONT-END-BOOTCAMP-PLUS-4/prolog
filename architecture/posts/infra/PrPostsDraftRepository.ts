import { PostsDraftRepository } from '../domain/PostsDraftRepository';
import { PostTemp, PrismaClient } from '../../../app/generated/prisma';
import { CreatePostDraftDto } from '../application/dto/CreatePostDraftDto';

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

  async createDraft(newDraft: CreatePostDraftDto): Promise<number | null> {
    const draft = await prisma.postTemp.create({
      data: {
        title: newDraft.title,
        content: newDraft.content,
        tags: newDraft.tags,
        userId: newDraft.userId,
      },
    });

    return draft.id;
  }
}
