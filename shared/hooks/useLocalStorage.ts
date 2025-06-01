/**

localStorage에 값을 저장하고, 불러오고, 삭제할 수 있는 커스텀 훅
SSR 환경(Next.js 등)에서도 안전하게 동작 가능

- 초기값(initialValue)은 서버/클라이언트 첫 렌더에서 사용
- 클라이언트에서는 localStorage의 값을 읽어와 상태를 동기화
- 값이 변경되면 localStorage와 상태가 함께 업데이트
- 다른 탭에서 localStorage가 변경되면 자동으로 상태가 동기화

@param key - localStorage에 저장할 key 값 (string)

@param initialValue - localStorage에 값이 없을 때 사용할 초기값
  
@returns {
  [value, setValue, removeValue]

  value: 현재 값

  setValue: 값을 변경하는 함수 (setValue(newValue) 또는 setValue(prev => newValue))

  removeValue: localStorage에서 값을 삭제하고, 상태를 초기값으로 되돌림
}

@example

const [name, setName, removeName] = useLocalStorage('user-name', '');
const [settings, setSettings, removeSettings] = useLocalStorage('app-settings', { theme: 'light' });

- 값 변경
setName('홍길동');
setSettings(prev => ({ ...prev, theme: 'dark' }));

- 값 삭제
removeName();

컴포넌트 내에서 사용 예시
<input value={name} onChange={e => setName(e.target.value)} />
 */

// package
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  // SSR 시 초기값으로 상태 설정
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // 클라이언트에서만 localStorage 값을 불러옴
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) {
        // JSON 파싱하여 상태 설정
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(`localStorage 읽기 오류: ${key}`, error);
    }
  }, [key]);

  //  상태와 localStorage 값을 함께 변경
  const setValue = (value: T | ((prev: T) => T)) => {
    if (typeof window === 'undefined') return;

    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`localStorage 저장 오류: ${key}`, error);
    }
  };

  //  localStorage에서 해당 key 삭제 및 상태 초기화
  const removeValue = () => {
    if (typeof window === 'undefined') return;

    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error(`localStorage 삭제 오류: ${key}`, error);
    }
  };

  //  다른 탭에서 localStorage가 변경되었을 때 동기화
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key !== key) return;

      try {
        if (e.newValue !== null) {
          setStoredValue(JSON.parse(e.newValue));
        } else {
          setStoredValue(initialValue);
        }
      } catch (error) {
        console.error(`localStorage 파싱 오류: ${key}`, error);
        setStoredValue(initialValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
}
