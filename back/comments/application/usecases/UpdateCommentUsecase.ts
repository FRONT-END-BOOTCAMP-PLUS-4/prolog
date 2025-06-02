import { CommentRepository } from '../../domain/CommentRepository';

export class UpdateCommentUsecase {
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(
    commentId: number,
    currentUserId: string,
    content: string,
  ): Promise<void> {
    // 권한 체크
    const comment = await this.commentRepository.findById(commentId);
    if (!comment) throw new Error('댓글이 존재하지 않습니다.');
    if (comment.userId !== currentUserId)
      throw new Error('수정 권한이 없습니다.');

    const now = new Date();
    await this.commentRepository.updateComment(commentId, content, now);
  }
}
