import dayjs from 'dayjs';

import { PostsDraftRepository } from '../../domain/PostsDraftRepository';
import { CreatePostDraftDto } from '../dto/CreatePostDraftDto';
import { PostDraftViewDto } from '../dto/PostDraftViewDto';

export class CreatePostDraftUsecase {
  constructor(private readonly postDraftRepository: PostsDraftRepository) {}

  async execute(newDraft: CreatePostDraftDto): Promise<PostDraftViewDto> {
    const draft = await this.postDraftRepository.createDraft(newDraft);

    return new PostDraftViewDto(
      draft.title,
      draft.content,
      draft.tags,
      draft.id,
      dayjs(draft.createdAt).format('YYYY-MM-DD'),
    );
  }
}
