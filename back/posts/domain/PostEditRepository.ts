import { BlogPost } from '@/app/generated/prisma';
import { UpdatePostDto } from '../application/dto/UpdatePostDto';

export interface PostsEditRepository {
  updatePost(newPost: UpdatePostDto): Promise<BlogPost>;
}
