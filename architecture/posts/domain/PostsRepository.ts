import { BlogPost } from '@/app/generated/prisma';
import { CreatePostDto } from '../application/dto/CreatePostDto';

export interface PostsRepository {
  createPost(newPost: CreatePostDto): Promise<BlogPost>;
}
