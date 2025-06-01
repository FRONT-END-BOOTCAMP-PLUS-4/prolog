import prisma from '@/shared/lib/prisma';
import { CreateCommentDto } from '../application/dto/CreateCommentDto';
import { CommentRepository } from '../domain/CommentRepository';
import { Comment } from '@/app/generated/prisma';

export class PrCommentRepository implements CommentRepository {
  async createComment(newComment: CreateCommentDto): Promise<Comment> {
    const createdComment = await prisma.comment.create({
      data: {
        userId: newComment.userId,
        postsId: newComment.postsId,
        content: newComment.content,
      },
    });

    return createdComment;
  }
}
