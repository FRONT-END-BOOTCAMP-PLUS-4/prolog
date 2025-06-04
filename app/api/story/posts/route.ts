import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import {
  validateNumericParam,
  validateSortParam,
} from '@/shared/utils/validators';
import { PrPostByUserRepository } from '@/back/story/posts/infra/PrPostByUserRepository';
import { GetPostByUserUsecase } from '@/back/story/posts/application/usecase/GetPostByUserUsecase';
import { GetPostByUserResponseDto } from '@/back/story/posts/application/dto/GetPostByUserResponseDto';
import { auth } from '@/app/(auth)/auth';

const secret = process.env.AUTH_SECRET;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    const session = await auth();
    const currentUserId = session?.user.id;
    if (!currentUserId) {
      return NextResponse.json(
        { message: '인증된 사용자가 아닙니다.' },
        { status: 401 },
      );
    }

    const filters = {
      name: searchParams.get('name') || undefined,
      title: searchParams.get('title') || undefined,
      content: searchParams.get('content') || undefined,
      tags: searchParams.getAll('tag').filter(Boolean),
      sort: validateSortParam(searchParams.get('sort')),
    };
    const page = validateNumericParam(searchParams.get('page') || '1', 1);
    const pageSize = validateNumericParam(
      searchParams.get('pageSize') || '24',
      24,
    );

    const repository = new PrPostByUserRepository();
    const usecase = new GetPostByUserUsecase(repository);
    let responseDto: GetPostByUserResponseDto;

    if (filters.sort === 'bookMark') {
      if (!currentUserId && !userId) {
        return NextResponse.json(
          {
            success: false,
            message: '로그인이 필요합니다.',
            data: [],
            hasMore: false,
            totalCount: 0,
            timestamp: new Date().toISOString(),
          },
          { status: 401 },
        );
      }
      responseDto = await usecase.getBookmarkedPosts(
        userId as string,
        currentUserId,
        {
          page,
          pageSize,
          title: filters.title,
          content: filters.content,
          tags: filters.tags,
        },
      );
    } else if (userId === currentUserId) {
      responseDto = await usecase.getMyPosts(currentUserId, {
        page,
        pageSize,
        title: filters.title,
        content: filters.content,
        tags: filters.tags,
        sort: filters.sort,
      });
    } else {
      if (!userId) {
        return NextResponse.json(
          {
            success: false,
            message: 'userId 쿼리스트링이 누락되었습니다.',
            data: [],
            hasMore: false,
            totalCount: 0,
          },
          { status: 400 },
        );
      }
      responseDto = await usecase.getUserPosts(userId, currentUserId, {
        page,
        pageSize,
        title: filters.title,
        content: filters.content,
        tags: filters.tags,
        sort: filters.sort,
      });
    }

    return NextResponse.json(
      { data: responseDto.data, hasMore: responseDto.hasMore },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
        },
      },
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: '게시글 목록 조회에 실패했습니다.',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}
