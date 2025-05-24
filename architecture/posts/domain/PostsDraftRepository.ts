import { PostTemp } from '@/app/generated/prisma';
import { CreatePostDraftDto } from '../application/dto/CreatePostDraftDto';

export interface PostsDraftRepository {
  findAll(userId: string): Promise<PostTemp[]>;
  deleteById(draftId: number): Promise<void>;
  createDraft(newDraft: CreatePostDraftDto): Promise<number | null>;
}
