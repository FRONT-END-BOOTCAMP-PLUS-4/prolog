import dayjs from 'dayjs';
import { GetPostListAllDto } from '../dto/GetPostListAllDto';
import { PostListAllRepository } from '../../domain/PostListAllRepository';
import { stripMarkdown } from '@/shared/utils/stripmarkdown';
import { BlogPost } from '@/app/generated/prisma';

export type GetPostListAllFilter = {
  name?: string;
  tags?: string[];
  title?: string;
  content?: string;
  page?: number;
  pageSize?: number;
  sort?: 'latest' | 'popular';
};

export type BlogPostWithCounts = BlogPost & {
  user: { id: string; name: string; profileImg?: string | null };
  _count: { likes: number; comments: number };
};

export class GetPostListAllUsecase {
  constructor(private readonly postsRepository: PostListAllRepository) {}

  async execute(filters: GetPostListAllFilter): Promise<{
    posts: GetPostListAllDto[];
    totalCount: number;
  }> {
    try {
      const { posts: postList, totalCount } =
        await this.postsRepository.findAll(filters);
      return {
        posts: postList.map(
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
            ),
        ),
        totalCount,
      };
    } catch (error) {
      console.error('Error fetching postList:', error);
      throw new Error('Failed to fetch postList');
    }
  }
}
