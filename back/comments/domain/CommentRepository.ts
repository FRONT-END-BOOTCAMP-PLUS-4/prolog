import { Comment } from '@/app/generated/prisma';
import { CreateCommentDto } from '../application/dto/CreateCommentDto';
import { GetCommentDto } from '../application/dto/GetCommentDto';

export interface CommentRepository {
  createComment(newComment: CreateCommentDto): Promise<Comment>;
  findAllByPostId(
    postId: number,
    currentUserId: string | null,
  ): Promise<GetCommentDto[]>;
}
