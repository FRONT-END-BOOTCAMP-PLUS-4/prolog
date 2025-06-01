import { AiRepository } from '../domain/AiRepository';
import { AiSummary } from '../domain/entities/AiSummary';

export class OpenAiRepository implements AiRepository {
  async createSummary(content: string): Promise<AiSummary[]> {
    const response = await fetch(`${process.env.GPT_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GPT_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `
사용자가 보낸 블로그 글을 읽고, 아래 조건에 맞게 **섹션별로 제목과 핵심 내용을 한 문장으로 요약**해줘.
출력은 아래 형식을 **정확히 따르고**, 전체 응답은 **400자 내외**로 제한해.

[
  { "title": "섹션 제목", "summary": "핵심 내용 한 문장 요약" },
  ...
]

조건:
- 각 summary는 50자 이내의 짧은 문장으로 작성해.
- title은 중복 없이 간결하게, 섹션을 대표할 만한 키워드로 작성해.
- 감정 표현은 줄이고 정보 위주로 요약해.
- 형식은 반드시 JSON 배열 형태로 반환해.

          `,
          },
          {
            role: 'user',
            content: content,
          },
        ],
      }),
    });

    const result = await response.json();

    const contentString = result.choices?.[0]?.message?.content;
    const parsedSummary: AiSummary[] = JSON.parse(contentString);

    return parsedSummary;
  }
}
