import { Comment } from '@/app/generated/prisma';
import { CreateCommentDto } from '../application/dto/CreateCommentDto';
import { GetCommentDto } from '../application/dto/GetCommentDto';

export interface CommentRepository {
  createComment(newComment: CreateCommentDto): Promise<Comment>;
  findAllByPostId(
    postId: number,
    currentUserId: string | null,
  ): Promise<GetCommentDto[]>;
  countByPostId(postId: number): Promise<number>;
  updateComment(
    commentId: number,
    content: string,
    updatedAt: Date,
  ): Promise<void>;
  findById(commentId: number): Promise<{ id: number; userId: string } | null>;
  deleteComment(commentId: number): Promise<void>;
}
