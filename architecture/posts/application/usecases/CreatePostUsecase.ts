import { PostsRepository } from '../../domain/PostsRepository';
import { CreatePostDto } from '../dto/CreatePostDto';

export class CreatePostUsecase {
  constructor(private readonly postRepository: PostsRepository) {}

  async execute(post: CreatePostDto) {
    const newPost = await this.postRepository.createPost(post);

    return newPost;
  }
}
