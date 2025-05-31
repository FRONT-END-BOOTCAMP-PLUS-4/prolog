import { NextResponse } from 'next/server';
import { Ollama } from 'ollama';

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    const ollama = new Ollama({ host: 'http://172.31.99.159:11434' });

    const response = await ollama.generate({
      model: 'gemma3:1b',
      prompt: question,
      system: `
당신은 블로그 목차를 잘 만들어주는 AI입니다.
유저가 입력한 블로그 제목과 본문을 바탕으로, 적절한 목차를 생성해주세요.

주의사항:
- 이미지 관련 내용은 무시하세요.
- 목차는 간단하고 논리적인 흐름을 가지도록 작성해주세요.

입력한 글을 잘 파악해서 자연스럽고 간략한 목차를 만들어주세요.
`,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error('Ollama API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
