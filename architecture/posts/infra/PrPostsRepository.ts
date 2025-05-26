import prisma from '@/shared/lib/prisma';
import { BlogPost } from '@/app/generated/prisma';

import { PostsRepository } from '../domain/PostsRepository';
import { CreatePostDto } from '../application/dto/CreatePostDto';

export class PrPostRepository implements PostsRepository {
  async createPost(newPost: CreatePostDto): Promise<BlogPost> {
    const createdPost = await prisma.blogPost.create({
      data: {
        userId: newPost.userId,
        title: newPost.title,
        content: newPost.content,
        tags: newPost.tags,
        isPublic: newPost.isPublic,
        useAi: newPost.useAi,
        aiSummary: newPost.AiSummary,
        thumbnailUrl: newPost.thumbnailUrl,
      },
    });

    return createdPost;
  }
}
