import { PostsDraftRepository } from '../../domain/PostsDraftRepository';

export class DeletePostDraftUsecase {
  constructor(private readonly postDraftRepository: PostsDraftRepository) {}

  async execute(draftId: number): Promise<number> {
    try {
      const deletedId = await this.postDraftRepository.deleteById(draftId);
      return deletedId;
    } catch (error) {
      console.error('Error fetching delete draft :', error);
      throw new Error('Failed to fetch delete draft');
    }
  }
}
