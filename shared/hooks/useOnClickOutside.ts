/**
 * 지정한 ref 요소 바깥을 클릭(또는 터치)하면 handler 함수가 실행되는 커스텀 훅
 *
 *  * 사용 예시:
 *   const ref = useRef<HTMLDivElement>(null);
 *   useOnClickOutside(ref, () => setOpen(false));
 *
 * @param ref - 감지할 요소의 ref (useRef로 생성해서 전달)
 * @param handler - 요소 바깥 클릭/터치 시 실행할 함수
 * @param enabled - (선택) true일 때만 동작, false면 비활성화 (기본값: true)
 */

// package
import { useEffect } from 'react';

export function useOnClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled = true,
) {
  useEffect(() => {
    if (!enabled) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler, enabled]);
}
