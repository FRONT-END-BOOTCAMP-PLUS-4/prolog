import prisma from '@/shared/lib/prisma';
import { BlogPost } from '@/app/generated/prisma';

import { PostsRepository } from '../domain/PostsRepository';
import { CreatePostDto } from '../application/dto/CreatePostDto';
import { GetPostViewDto } from '../application/dto/GetPostViewDto';
import { AiSummaryType } from '@/views/post/post-form/types';

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
        aiSummary: newPost.aiSummary,
        thumbnailUrl: newPost.thumbnailUrl,
      },
    });

    return createdPost;
  }

  async getPostById(
    postId: number,
    currentUserId: string | null,
  ): Promise<GetPostViewDto> {
    const postDetail = await prisma.blogPost.findUnique({
      where: {
        id: postId, // 상세 조회할 게시글 ID
      },
      select: {
        id: true, // 게시글 ID
        title: true, // 게시글 제목
        thumbnailUrl: true, // 게시글 썸네일
        content: true, // 게시글 본문
        createdAt: true, // 게시글 작성날짜
        updatedAt: true, // 게시글 수정날짜
        tags: true, // 게시글 태그
        aiSummary: true, // ai 요약
        useAi: true, // ai 사용여부
        categoryId: true,
        isPublic: true,

        // 유저 정보
        user: {
          select: {
            id: true, // 게시글 유저 uuid
            name: true, // 게시글 유저 이름
            profileImg: true, // 게시글 유저 프로필
          },
        },

        // 좋아요 개수
        _count: {
          select: {
            likes: true,
          },
        },
      },
    });

    if (!postDetail) {
      throw new Error('Post not found');
    }

    let liked = false;
    let bookmarked = false;
    let following = false;

    if (currentUserId) {
      const [likeRow, bookmarkRow, followRow] = await Promise.all([
        prisma.postLike.findFirst({
          where: { postsId: postId, userId: currentUserId },
        }),
        prisma.bookMark.findFirst({
          where: { postsId: postId, userId: currentUserId },
        }),
        prisma.subscribe.findFirst({
          where: { requestId: currentUserId, responseId: postDetail.user.id },
        }),
      ]);
      liked = !!likeRow;
      bookmarked = !!bookmarkRow;
      following = !!followRow;
    }

    const isMine = currentUserId === postDetail.user.id;

    return {
      ...postDetail,
      createdAt: postDetail.createdAt.toISOString(),
      updatedAt: postDetail.updatedAt
        ? postDetail.updatedAt.toISOString()
        : null,
      profileImage: postDetail.user.profileImg,
      nickname: postDetail.user.name,
      isLiked: Boolean(liked),
      isBookmarked: Boolean(bookmarked),
      following: Boolean(following),
      likeCount: postDetail._count.likes,
      aiSummary: postDetail.aiSummary as AiSummaryType[] | null,
      isMine,
    };
  }

  async findWriterByPostId(postId: number): Promise<{ userId: string }> {
    const post = await prisma.blogPost.findUnique({
      where: { id: postId },
      select: { userId: true },
    });
    if (!post) throw new Error('Post not found');
    return post;
  }

  async findById(
    postId: number,
  ): Promise<{ id: number; userId: string } | null> {
    const post = await prisma.blogPost.findUnique({
      where: { id: postId },
      select: { id: true, userId: true },
    });
    return post;
  }

  async deletePost(postId: number): Promise<void> {
    await prisma.blogPost.delete({
      where: { id: postId },
    });
  }
}
