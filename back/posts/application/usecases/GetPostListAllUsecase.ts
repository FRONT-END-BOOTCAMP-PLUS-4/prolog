import dayjs from 'dayjs';
import { GetPostListAllDto } from '../dto/GetPostListAllDto';
import { PostListAllRepository } from '../../domain/PostListAllRepository';
import { stripMarkdown } from '@/shared/utils/stripmarkdown';

export type GetPostListAllFilter = {
  name?: string;
  tags?: string[];
  title?: string;
  content?: string;
};

export class GetPostListAllUsecase {
  constructor(private readonly postsRepository: PostListAllRepository) {}

  async execute(filters: GetPostListAllFilter): Promise<GetPostListAllDto[]> {
    try {
      const postList = await this.postsRepository.findAll(filters);
      return postList.map(
        (post) =>
          new GetPostListAllDto(
            post.id,
            post.title,
            stripMarkdown(post.content),
            post.tags,
            dayjs(post.createdAt).format('YYYY-MM-DD'),
            post.updatedAt ? dayjs(post.updatedAt).format('YYYY-MM-DD') : '',
            post.userId,
            post.user.name,
            post.user.profileImg ?? '/svgs/profile.svg',
            post.thumbnailUrl ?? null,
          ),
      );
    } catch (error) {
      console.error('Error fetching postList:', error);
      throw new Error('Failed to fetch postList');
    }
  }
}
