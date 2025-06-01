import { BlogPost } from '@/app/generated/prisma';
import { CreatePostDto } from '../application/dto/CreatePostDto';
import { GetPostViewDto } from '../application/dto/GetPostViewDto';

export interface PostsRepository {
  createPost(newPost: CreatePostDto): Promise<BlogPost>;
  getPostById(postId: number, currentUserId: string): Promise<GetPostViewDto>;
}
