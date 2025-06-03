import { CommentRepository } from '../../domain/CommentRepository';
import { GetCommentDto } from '../dto/GetCommentDto';

export class GetCommentListUsecase {
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(
    postId: number,
    currentUserId: string | null,
  ): Promise<GetCommentDto[]> {
    try {
      const comments = await this.commentRepository.findAllByPostId(
        postId,
        currentUserId,
      );

      return comments.map(
        (c) =>
          new GetCommentDto(
            c.id,
            c.profileImage ?? '',
            c.nickname,
            c.userEmail,
            c.createdAt,
            c.updatedAt ? c.updatedAt : null,
            c.content,
            c.isMine,
          ),
      );
    } catch (error) {
      console.error('Error fetching comments:', error);
      throw new Error('Failed to fetch comments');
    }
  }
}
