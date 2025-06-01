import { NextRequest, NextResponse } from 'next/server';

import { CreateAiSummary } from '@/back/ai/application/usecases/CreateAiSummary';
import { OpenAiRepository } from '@/back/ai/infra/OpenAiRepository';

export async function POST(req: NextRequest) {
  try {
    const content = await req.json();

    if (!content) {
      return NextResponse.json({
        message: 'AI 생성 중 오류가 발생했습니다.',
      });
    }

    const aiRepository = new OpenAiRepository();
    const createAiSummary = new CreateAiSummary(aiRepository);

    const aiSummary = await createAiSummary.execute(content);

    return NextResponse.json(aiSummary, { status: 201 });
  } catch (error) {
    console.error('AI 요약 생성 실패:', error);
    return NextResponse.json(
      { message: 'AI 요약 생성 중 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
