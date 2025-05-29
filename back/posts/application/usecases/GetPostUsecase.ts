import { PostsRepository } from '../../domain/PostsRepository';

export class GetPostUsecase {
  constructor(private readonly postRepository: PostsRepository) {}

  async execute(id: number) {
    const post = await this.postRepository.getPostById(id);

    if (!post) {
      throw new Error('Post not found');
    }

    return post;
  }
}
