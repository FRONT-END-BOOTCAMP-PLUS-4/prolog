import { NotificationRepository } from '@/back/notification/domain/NotificationRepository';
import { CommentRepository } from '../../domain/CommentRepository';
import { CreateCommentDto } from '../dto/CreateCommentDto';
import { PostsRepository } from '@/back/posts/domain/PostsRepository';

export class CreateCommentUsecase {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly postsRepository: PostsRepository,
    private readonly notificationRepository: NotificationRepository,
  ) {}

  async execute(comment: CreateCommentDto) {
    // 1. 댓글 생성
    const newComment = await this.commentRepository.createComment(comment);

    // 2. 댓글이 달린 게시글의 작성자(== 알림 받을 유저) 정보 조회
    // 보통 commentRepository.createComment가 return하는 newComment에 postsId가 있음
    const post = await this.postsRepository.findWriterByPostId(
      newComment.postsId,
    );

    const postWriterId = post.userId; // 게시글 작성자 id

    // **댓글 작성자가 게시글 작성자와 다를 때만 알림 전송**
    if (newComment.userId !== postWriterId) {
      await this.notificationRepository.sendNotification({
        senderId: newComment.userId, // 댓글 작성자
        receiverId: [postWriterId], // 게시글 작성자
        postsId: newComment.postsId, // 게시글 id
        type: 0, // 댓글 알림 타입
      });
    }

    return newComment;
  }
}
