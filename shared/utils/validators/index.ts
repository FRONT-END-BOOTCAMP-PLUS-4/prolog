// 숫자 파라미터 유효성 검사
export const validateNumericParam = (
  value: string,
  defaultValue: number,
): number => {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : defaultValue;
};

// 정렬 파라미터 유효성 검사
export const validateSortParam = (
  value: string | null,
): 'latest' | 'popular' => {
  return value === 'popular' ? 'popular' : 'latest';
};
