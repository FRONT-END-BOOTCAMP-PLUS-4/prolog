import { SubscribeRepository } from '@/back/subscribe/domain/SubscribeRepository';
import { PostsRepository } from '../../domain/PostsRepository';
import { CreatePostDto } from '../dto/CreatePostDto';

export class CreatePostUsecase {
  constructor(
    private readonly postRepository: PostsRepository,
    private readonly subscribeRepository: SubscribeRepository,
  ) {}

  async execute(post: CreatePostDto) {
    const newPost = await this.postRepository.createPost(post);

    const userId = newPost.userId;

    const followers =
      await this.subscribeRepository.findFollowersByUserId(userId);

    return newPost;
  }
}
