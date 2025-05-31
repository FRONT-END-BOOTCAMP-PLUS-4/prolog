import { PostsEditRepository } from '../../domain/PostEditRepository';
import { UpdatePostDto } from '../dto/UpdatePostDto';

export class UpdatePostUsecase {
  constructor(private readonly updatePostRepository: PostsEditRepository) {}

  async execute(newPost: UpdatePostDto) {
    const post = await this.updatePostRepository.updatePost(newPost);

    return post;
  }
}
