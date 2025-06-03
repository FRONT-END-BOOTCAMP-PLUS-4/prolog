import { PostsRepository } from '../../domain/PostsRepository';

export class DeletePostUsecase {
  constructor(private readonly postsRepository: PostsRepository) {}

  async execute(postId: number, currentUserId: string) {
    // 1. 게시글 존재/권한 체크
    const post = await this.postsRepository.findById(postId);
    if (!post) throw new Error('게시글이 존재하지 않습니다.');

    if (post.userId !== currentUserId) {
      throw new Error('권한이 없습니다.');
    }

    // 2. 삭제 실행
    await this.postsRepository.deletePost(postId);
  }
}
