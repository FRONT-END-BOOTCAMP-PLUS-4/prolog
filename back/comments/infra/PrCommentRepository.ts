import prisma from '@/shared/lib/prisma';
import { CreateCommentDto } from '../application/dto/CreateCommentDto';
import { CommentRepository } from '../domain/CommentRepository';
import { Comment } from '@/app/generated/prisma';
import { GetCommentDto } from '../application/dto/GetCommentDto';

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

  async findAllByPostId(
    postId: number,
    currentUserId: string | null,
  ): Promise<GetCommentDto[]> {
    const comments = await prisma.comment.findMany({
      where: { postsId: postId },
      orderBy: { createdAt: 'asc' },
      include: {
        user: {
          select: {
            profileImg: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return comments.map((comment) => ({
      id: comment.id,
      postsId: comment.postsId,
      userId: comment.userId,
      content: comment.content,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt ?? null,
      profileImage: comment.user.profileImg,
      nickname: comment.user.name,
      userEmail: comment.user.email,
      isMine: currentUserId ? comment.userId === currentUserId : false,
    }));
  }

  async countByPostId(postId: number): Promise<number> {
    const count = await prisma.comment.count({
      where: { postsId: postId },
    });
    return count;
  }
}
