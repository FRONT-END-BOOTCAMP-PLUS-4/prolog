import { PostsDraftRepository } from '../../domain/PostsDraftRepository';

export class DeletePostDraftUsecase {
  constructor(private readonly postDraftRepository: PostsDraftRepository) {}

  async execute(draftId: number): Promise<void> {
    try {
      await this.postDraftRepository.deleteById(draftId);
    } catch (error) {
      console.error('Error fetching delete draft :', error);
      throw new Error('Failed to fetch delete draft');
    }
  }
}
