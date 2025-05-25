//package
import React, { useRef, useState } from 'react';

//slice
import SelectPres from '../presentational/SelectPres';
import { SelectContProps } from '../types';

// layer
import useOnClickOutside from '@/shared/hooks/useOnClickOutside';

export default function SelectCont({
  options,
  value: controlledValue,
  onChange,
  placeholder,
  className,
}: SelectContProps) {
  const [open, setOpen] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState<string>('');

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpen(false), open);

  const value =
    controlledValue !== undefined ? controlledValue : uncontrolledValue;

  const handleChange = (val: string) => {
    if (onChange) onChange(val);
    if (controlledValue === undefined) setUncontrolledValue(val);
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
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
}
