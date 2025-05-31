import { SubscribeRepository } from '@/back/subscribe/domain/SubscribeRepository';
import { PostsRepository } from '../../domain/PostsRepository';
import { CreatePostDto } from '../dto/CreatePostDto';
import { NotificationRepository } from '@/back/notification/domain/NotificationRepository';

export class CreatePostUsecase {
  constructor(
    private readonly postRepository: PostsRepository,
    private readonly subscribeRepository: SubscribeRepository,
    private readonly notificationRepository: NotificationRepository,
  ) {}

  async execute(post: CreatePostDto) {
    const newPost = await this.postRepository.createPost(post);

    const userId = newPost.userId;
    const postId = newPost.id;

    const followers =
      await this.subscribeRepository.findFollowersByUserId(userId);

    if (followers.length > 0) {
      await this.notificationRepository.sendNotification({
        senderId: userId,
        receiverId: followers,
        postsId: postId,
        type: 1, // 예: 게시글 알림 타입
      });
    }

    return newPost;
  }
}
