import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { PrPostListAllRepository } from '@/back/posts/infra/PrPostListAllRepository';
import { GetPostListAllUsecase } from '@/back/posts/application/usecases/GetPostListAllUsecase';
import {
  validateNumericParam,
  validateSortParam,
} from '@/shared/utils/validators';
import { PrPostByUserRepository } from '@/back/story/posts/infra/PrPostByUserRepository';
import { GetPostByUserUsecase } from '@/back/story/posts/application/usecase/GetPostByUserUsecase';
import { GetPostByUserResponseDto } from '@/back/story/posts/application/dto/GetPostByUserResponseDto';
import { GetPostListAllResponseDto } from '@/back/posts/application/dto/GetPostListAllResponseDto';

const secret = process.env.AUTH_SECRET;
let response: GetPostByUserResponseDto;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = req.nextUrl.searchParams.get('userId');
    const token = await getToken({ req, secret });
    const currentUserId = token?.userId || '';
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

    let response: GetPostByUserResponseDto;

    if (userId === currentUserId) {
      const repository = new PrPostByUserRepository();
      const usecase = new GetPostByUserUsecase(repository);
      response = await usecase.getMyPosts(currentUserId, {
        ...filters,
        page,
        pageSize,
      });
    } else {
      const repository = new PrPostByUserRepository();
      const usecase = new GetPostByUserUsecase(repository);
      response = await usecase.getUserPosts(userId as string, currentUserId, {
        ...filters,
        page,
        pageSize,
      });
    }

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
      },
    });
  } catch (error) {
    console.error('API Error:', error);

    const errorMessage =
      process.env.NODE_ENV === 'development'
        ? error instanceof Error
          ? error.message
          : 'Unknown error'
        : 'Internal server error';

    return NextResponse.json(
      {
        success: false,
        message: '게시글 목록 조회에 실패했습니다.',
        error: errorMessage,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}
