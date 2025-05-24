import { PostsDraftRepository } from '../../domain/PostsDraftRepository';
import { CreatePostDraftDto } from '../dto/CreatePostDraftDto';

export class CreatePostDraftUsecase {
  constructor(private readonly postDraftRepository: PostsDraftRepository) {}

  async execute(newDraft: CreatePostDraftDto) {
    const draft = await this.postDraftRepository.createDraft(newDraft);

    return draft;
  }
}
