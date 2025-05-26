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

  async deleteById(draftId: number): Promise<number> {
    const result = await prisma.postTemp.delete({
      where: {
        id: draftId,
      },
    });

    return result.id;
  }

  async createDraft(newDraft: CreatePostDraftDto): Promise<PostTemp> {
    const draft = await prisma.postTemp.create({
      data: {
        title: newDraft.title,
        content: newDraft.content,
        tags: newDraft.tags,
        userId: newDraft.userId,
      },
    });

    return draft;
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
