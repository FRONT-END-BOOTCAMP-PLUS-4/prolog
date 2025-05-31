export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>?/gm, '');
}

export function stripMarkdown(md: string): string {
  return (
    md
      // 헤딩
      .replace(/^#{1,6}\s+/gm, '')
      // 리스트
      .replace(/^\s*[-*+]\s+/gm, '')
      .replace(/^\d+\.\s+/gm, '')
      // 볼드/이탤릭/스트라이크
      .replace(/(\*\*|__)(.*?)\1/g, '$2')
      .replace(/(\*|_)(.*?)\1/g, '$2')
      .replace(/~~(.*?)~~/g, '$1')
      // 인라인 코드, 코드블록
      .replace(/`{1,3}([^`]+?)`{1,3}/g, '$1')
      // 링크, 이미지
      .replace(/!\[([^\]]*)\]\([^\)]*\)/g, '$1')
      .replace(/\[([^\]]*)\]\([^\)]*\)/g, '$1')
      // 인용문
      .replace(/^\s*>\s?/gm, '')
      // 수평선
      .replace(/^\s*[-*_]{3,}\s*$/gm, '')
      // 남은 특수문자들
      .replace(/[*_~`]/g, '')
      // 연속 개행 정리
      .replace(/\n{2,}/g, '\n')
      // 연속 공백 정리
      .replace(/[ \t]{2,}/g, ' ')
      // 각 줄 앞뒤 공백 제거 및 빈 줄 제거
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .join('\n')
      .trim()
  );
}
