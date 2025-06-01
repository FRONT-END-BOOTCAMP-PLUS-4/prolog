import { CreateAiSummary } from '@/back/ai/application/usecases/CreateAiSummary';
import { OpenAiRepository } from '@/back/ai/infra/OpenAiRepository';
import { NextRequest, NextResponse } from 'next/server';

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

// export async function POST(req: Request) {
//   const body = await req.json();

//   const response = await fetch(`${process.env.GPT_URL}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${process.env.GPT_API_KEY}`,
//     },
//     body: JSON.stringify({
//       model: 'gpt-4o-mini',
//       messages: [
//         {
//           role: 'system',
//           content: `
// 사용자가 보낸 블로그 글을 읽고, 아래 조건에 맞게 **섹션별로 제목과 핵심 내용을 한 문장으로 요약**해줘.
// 출력은 아래 형식을 **정확히 따르고**, 전체 응답은 **400자 내외**로 제한해.

// [
//   { "title": "섹션 제목", "summary": "핵심 내용 한 문장 요약" },
//   ...
// ]

// 조건:
// - 각 summary는 50자 이내의 짧은 문장으로 작성해.
// - title은 중복 없이 간결하게, 섹션을 대표할 만한 키워드로 작성해.
// - 감정 표현은 줄이고 정보 위주로 요약해.
// - 형식은 반드시 JSON 배열 형태로 반환해.

//           `,
//         },
//         {
//           role: 'user',
//           content: body,
//         },
//       ],
//     }),
//   });

//   const data = await response.json();

//   return NextResponse.json({ answer: data.choices[0].message.content });
// }
