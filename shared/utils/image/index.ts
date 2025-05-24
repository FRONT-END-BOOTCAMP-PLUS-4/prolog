/** 마크다운에서 첫번째 이미지 반환해주는 함수 */
export function getFirstImageUrlFromMarkdown(content: string): string | null {
  const imageRegex = /!\[.*?\]\((.*?)\)/;
  const match = content.match(imageRegex);
  return match ? match[1] : null;
}
