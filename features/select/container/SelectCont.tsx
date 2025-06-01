//package
import React, { useRef, useState } from 'react';

//slice
import SelectPres from '../presentational/SelectPres';
import { SelectContProps } from '../types';

// layer
import useOnClickOutside from '@/shared/hooks/useOnClickOutside';
import useLocalStorage from '@/shared/hooks/useLocalStorage';

export default function SelectCont({
  options,
  value: controlledValue,
  onChange,
  className,
  storageKey,
}: SelectContProps) {
  const [open, setOpen] = useState<boolean>(false);

  // storageKey가 있을 때만 localStorage 훅 사용
  const [storedValue, setStoredValue] = useLocalStorage<string>(
    storageKey || 'select-value',
    '',
  );

  // storageKey가 없는 일반 상태
  const [uncontrolledValue, setUncontrolledValue] = useState<string>('');

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpen(false), open);

  // 값 우선순위
  const value =
    controlledValue !== undefined
      ? controlledValue
      : storageKey
        ? storedValue
        : uncontrolledValue;

  const handleChange = (val: string) => {
    if (onChange) onChange(val);

    if (controlledValue === undefined) {
      if (storageKey) {
        setStoredValue(val);
      } else {
        setUncontrolledValue(val);
      }
    }

    setOpen(false);
  };

  return (
    <div ref={ref}>
      <SelectPres
        options={options}
        value={value}
        open={open}
        setOpen={setOpen}
        onChange={handleChange}
        className={className}
      />
    </div>
  );
}
