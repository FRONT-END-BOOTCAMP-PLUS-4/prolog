import prisma from '@/shared/lib/prisma';
import { BlogPost } from '@/app/generated/prisma';

import { PostsRepository } from '../domain/PostsRepository';
import { CreatePostDto } from '../application/dto/CreatePostDto';
import { GetPostViewDto } from '../application/dto/GetPostViewDto';
import dayjs from 'dayjs';

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

  async getPostById(id: number): Promise<GetPostViewDto> {
    // const post = await prisma.blogPost.findUnique({
    //   where: { id },
    // });

    // if (!post) {
    //   throw new Error(`Post with id ${id} not found`);
    // }

    const post = new GetPostViewDto(
      id,
      '임시 게시글 제목', // title
      'https://via.placeholder.com/150', // profileImage
      '임시 유저', // nickname
      'email@naver.com', // userEmail
      dayjs('2025-05-29T12:00:00Z').format('YYYY-MM-DD'), // createdAt
      null, // updatedAt
      true, // following
      true, // isBookmarked
      false, // isLiked
      42, // likeCount
      '이것은 게시글 본문입니다.', // content
      ['Next.js', 'CSR', 'React'], // tags
      '이 글은 CSR에 대해 설명합니다.', // aiSummary
      'https://via.placeholder.com/600x300', // thumbnailUrl
    );

    return post;
  }
}
