import { PostTemp } from '@/app/generated/prisma';
import { CreatePostDraftDto } from '../application/dto/CreatePostDraftDto';
import { UpdatePostDraftDto } from '../application/dto/UpdatePostDraftDto';

export interface PostsDraftRepository {
  findAll(userId: string): Promise<PostTemp[]>;
  deleteById(draftId: number): Promise<number>;
  createDraft(newDraft: CreatePostDraftDto): Promise<PostTemp>;
  updateDraft(newDraft: UpdatePostDraftDto): Promise<number>;
}
