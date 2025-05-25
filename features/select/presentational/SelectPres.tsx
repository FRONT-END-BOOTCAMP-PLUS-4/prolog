// package
import React from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';

// slice
import styles from '../styles/SelectPres.module.scss';
import { SelectPresProps } from '../types';

export default function SelectPres({
  options,
  value,
  open,
  setOpen,
  onChange,
  className = '',
}: SelectPresProps) {
  const selected = options.find((opt) => opt.value === value);

  return (
    <div className={`${styles.selectWrap} ${className}`}>
      <button
        type="button"
        className={styles.selected}
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selected && selected.label}</span>
        <ChevronDownIcon
          className={`${styles.filterIcon} ${open ? styles.filterIconOpen : ''}`}
        />
      </button>
      {open && (
        <div className={styles.optionList} role="listbox" tabIndex={0}>
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`${styles.option} ${opt.value === value ? styles.optionSelected : ''}`}
              role="option"
              aria-selected={opt.value === value}
              tabIndex={-1}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onChange(opt.value);
                  setOpen(false);
                }
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
