import prisma from '@/shared/lib/prisma';
import { BlogPost } from '@/app/generated/prisma';
import { UpdatePostDto } from '../application/dto/UpdatePostDto';
import { PostsEditRepository } from '../domain/PostEditRepository';

export class PrPostUpdateRepository implements PostsEditRepository {
  async updatePost(newPost: UpdatePostDto): Promise<BlogPost> {
    const updatedPost = await prisma.blogPost.update({
      where: { id: newPost.postId },
      data: {
        title: newPost.title,
        content: newPost.content,
        tags: newPost.tags,
        aiSummary: newPost.aiSummary,
        isPublic: newPost.isPublic,
        thumbnailUrl: newPost.thumbnailUrl,
        useAi: newPost.useAi,
      },
    });

    return updatedPost;
  }
}
