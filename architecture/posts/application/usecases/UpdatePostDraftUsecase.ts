import { PostsDraftRepository } from '../../domain/PostsDraftRepository';
import { UpdatePostDraftDto } from '../dto/UpdatePostDraftDto';

export class UpdatePostDraftUsecase {
  constructor(private readonly postDraftRepository: PostsDraftRepository) {}

  async execute(newDraft: UpdatePostDraftDto) {
    const draft = await this.postDraftRepository.updateDraft(newDraft);

    return draft;
  }
}
