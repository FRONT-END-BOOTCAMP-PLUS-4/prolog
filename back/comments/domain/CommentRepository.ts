import { Comment } from '@/app/generated/prisma';
import { CreateCommentDto } from '../application/dto/CreateCommentDto';

export interface CommentRepository {
  createComment(newComment: CreateCommentDto): Promise<Comment>;
}
