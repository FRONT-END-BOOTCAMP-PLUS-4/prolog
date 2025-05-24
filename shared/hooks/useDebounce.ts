import { useEffect, useRef } from 'react';

type Props<T> = {
  /**
   * delay 동안 변화가 없을 경우 실행할 콜백 함수
   */
  callback: () => void;

  /**
   * 디바운스 지연 시간 (ms 단위)
   */
  delay: number;

  /**
   * 변화 감지 대상이 되는 의존성 배열
   */
  deps: T[];

  /**
   * 디바운스 실행 여부를 제어하는 조건 (기본값: true)
   * false인 경우 callback이 실행되지 않음
   */
  condition?: boolean;
};

export function useDebounce<T>({
  callback,
  delay,
  deps,
  condition = true,
}: Props<T>) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!condition) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, deps);
}
