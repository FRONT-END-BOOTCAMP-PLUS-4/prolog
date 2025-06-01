import { NextRequest, NextResponse } from 'next/server';
import { PrPostListAllRepository } from '@/back/posts/infra/PrPostListAllRepository';
import { GetPostListAllUsecase } from '@/back/posts/application/usecases/GetPostListAllUsecase';
import {
  validateNumericParam,
  validateSortParam,
} from '@/shared/utils/validators';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // 필터 파라미터 추출
    const filters = {
      name: searchParams.get('name') || undefined,
      title: searchParams.get('title') || undefined,
      content: searchParams.get('content') || undefined,
      tags: searchParams.getAll('tag').filter(Boolean),
      sort: validateSortParam(searchParams.get('sort')),
    };

    // 페이지네이션
    const page = validateNumericParam(searchParams.get('page') || '1', 1);
    const pageSize = validateNumericParam(
      searchParams.get('pageSize') || '20',
      20,
    );

    // 저장소 및 유스케이스 객체 생성
    const repository = new PrPostListAllRepository();
    const usecase = new GetPostListAllUsecase(repository);

    // 게시글 목록 조회 (usecase에서 응답 구조까지 반환)
    const response = await usecase.execute({
      ...filters,
      page,
      pageSize,
    });

    // 캐시 헤더 추가 및 응답 반환
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
