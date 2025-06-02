import { CommentRepository } from '../../domain/CommentRepository';

export class GetCommentCountUsecase {
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(postId: number): Promise<number> {
    return this.commentRepository.countByPostId(postId);
  }
}
