import dayjs from 'dayjs';
import { PostsDraftRepository } from '../../domain/PostsDraftRepository';
import { GetPostDraftDto } from '../dto/GetPostDraftDto';

export class GetPostDraftListtUsecase {
  constructor(private readonly postDraftListRepository: PostsDraftRepository) {}

  async execute(userId: string): Promise<GetPostDraftDto[]> {
    try {
      const draftList = await this.postDraftListRepository.findAll(userId);

      return draftList.map(
        (draft) =>
          new GetPostDraftDto(
            draft.id,
            draft.title,
            draft.content,
            dayjs(draft.createdAt).format('YYYY-MM-DD'),
          ),
      );
    } catch (error) {
      console.error('Error fetching draftList:', error);
      throw new Error('Failed to fetch draftList');
    }
  }
}
