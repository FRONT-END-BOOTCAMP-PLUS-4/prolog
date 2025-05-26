import prisma from '@/shared/lib/prisma';

import { PostsDraftRepository } from '../domain/PostsDraftRepository';
import { PostTemp } from '../../../app/generated/prisma';
import { CreatePostDraftDto } from '../application/dto/CreatePostDraftDto';
import { UpdatePostDraftDto } from '../application/dto/UpdatePostDraftDto';

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

  async updateDraft(newDraft: UpdatePostDraftDto): Promise<number> {
    const draft = await prisma.postTemp.update({
      where: { id: newDraft.draftId },
      data: {
        title: newDraft.title,
        content: newDraft.content,
        tags: newDraft.tags,
      },
    });

    return draft.id;
  }
}
