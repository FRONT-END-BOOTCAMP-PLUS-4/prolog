import dayjs from 'dayjs';
import { PostsDraftRepository } from '../../domain/PostsDraftRepository';
import { GetPostDraftViewDto } from '../dto/GetPostDraftViewDto';

export class GetPostDraftListtUsecase {
  constructor(private readonly postDraftListRepository: PostsDraftRepository) {}

  async execute(userId: string): Promise<GetPostDraftViewDto[]> {
    try {
      const draftList = await this.postDraftListRepository.findAll(userId);

      return draftList.map(
        (draft) =>
          new GetPostDraftViewDto(
            draft.id,
            draft.title,
            draft.content,
            draft.tags,
            dayjs(draft.createdAt).format('YYYY-MM-DD'),
          ),
      );
    } catch (error) {
      console.error('Error fetching draftList:', error);
      throw new Error('Failed to fetch draftList');
    }
  }
}
