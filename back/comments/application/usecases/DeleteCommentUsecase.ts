import { CommentRepository } from '../../domain/CommentRepository';

export class DeleteCommentUsecase {
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(commentId: number, currentUserId: string) {
    // 1. 댓글 존재/권한 체크
    const comment = await this.commentRepository.findById(commentId);
    if (!comment) throw new Error('댓글이 존재하지 않습니다.');

    if (comment.userId !== currentUserId) {
      throw new Error('권한이 없습니다.');
    }

    // 2. 삭제 실행
    await this.commentRepository.deleteComment(commentId);
  }
}
