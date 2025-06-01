import dayjs from 'dayjs';
import { GetPostListAllDto } from '../dto/GetPostListAllDto';
import { GetPostListAllResponseDto } from '../dto/GetPostListAllResponseDto';
import {
  PostListAllRepository,
  GetPostListAllFilter,
} from '../../domain/PostListAllRepository';
import { stripMarkdown } from '@/shared/utils/stripmarkdown';

export class GetPostListAllUsecase {
  constructor(private readonly postsRepository: PostListAllRepository) {}

  async execute(
    currentUserId: string,
    filters: GetPostListAllFilter,
  ): Promise<GetPostListAllResponseDto> {
    try {
      const {
        posts: postList,
        totalCount,
        likedPostIds,
      } = await this.postsRepository.findAll(filters, currentUserId);
      const page = filters.page ?? 1;
      const pageSize = filters.pageSize ?? 20;

      const data = postList.map(
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
            post._count.likes,
            post._count.comments,
            likedPostIds.includes(post.id),
          ),
      );

      const hasMore = (page - 1) * pageSize + data.length < totalCount;
      const timestamp = new Date().toISOString();

      return new GetPostListAllResponseDto(
        true,
        {
          name: filters.name,
          tags: filters.tags,
          title: filters.title,
          content: filters.content,
          page,
          pageSize,
        },
        data.length,
        data,
        hasMore,
        totalCount,
        timestamp,
      );
    } catch (error) {
      console.error('Error fetching postList:', error);
      throw new Error('Failed to fetch postList');
    }
  }
}
