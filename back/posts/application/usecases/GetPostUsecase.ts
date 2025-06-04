import dayjs from 'dayjs';
import { PostsRepository } from '../../domain/PostsRepository';
import { GetPostViewDto } from '../dto/GetPostViewDto';

export class GetPostUsecase {
  constructor(private readonly postRepository: PostsRepository) {}

  async execute(postId: number, currentUserId: string | null) {
    const post = await this.postRepository.getPostById(postId, currentUserId);

    if (!post) {
      throw new Error('Post not found');
    }

    return new GetPostViewDto(
      post.id,
      post.title,
      post.thumbnailUrl ?? null,
      post.content,
      dayjs(post.createdAt).format('YYYY-MM-DD'),
      post.updatedAt ?? null,
      post.tags ?? [],
      post.aiSummary ?? null,
      post.isPublic,
      post.useAi,
      post.categoryId,
      post.authorId,
      post.profileImage ?? null,
      post.nickname,
      post.isLiked,
      post.isBookmarked,
      post.following,
      post.likeCount,
      post.isMine,
    );
  }
}
