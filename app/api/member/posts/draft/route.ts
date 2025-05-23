import { PrPostDraftRepository } from '@/architecture/posts/infra/PrPostsDraftRepository';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    /** 토큰으로 user_id 를 받는 로직으로 변경 예정 */
    const userId = 'uuid-1';

    const repository = new PrPostDraftRepository();
    const draftList = await repository.findAll(userId);

    return NextResponse.json({ data: draftList });
  } catch (error) {
    console.error('임시 글 불러오기 오류:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
