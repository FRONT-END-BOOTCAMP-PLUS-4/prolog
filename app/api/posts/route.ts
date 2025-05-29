import { NextRequest, NextResponse } from 'next/server';
import { PrPostListAllRepository } from '@/back/posts/infra/PrPostListAllRepository';
import { GetPostListAllUsecase } from '@/back/posts/application/usecases/GetPostListAllUsecase';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const name = searchParams.get('name') || undefined;
    const title = searchParams.get('title') || undefined;
    const content = searchParams.get('content') || undefined;
    const tags = searchParams.getAll('tag').filter(Boolean);

    const postListAllRepository = new PrPostListAllRepository();
    const getPostListAllUsecase = new GetPostListAllUsecase(
      postListAllRepository,
    );

    const posts = await getPostListAllUsecase.execute({
      name,
      tags,
      title,
      content,
    });

    const response = {
      success: true,
      filters: { name, tags, title, content },
      count: posts.length,
      data: posts,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch post list',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}
