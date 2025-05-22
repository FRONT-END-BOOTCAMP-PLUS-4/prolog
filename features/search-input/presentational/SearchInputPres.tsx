'use client';

// package
import React from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

// slice
import styles from '../styles/SearchInputPres.module.scss';
import type { SearchInputPresProps } from '../types';

export default function SearchInputPres({
  chips,
  inputValue,
  setInputValue,
  showDropdown,
  setShowDropdown,
  inputRef,
  containerRef,
  chipRefs,
  dropdownItems,
  handleRemoveChip,
  handleKeyDown,
  handleChipKeyDown,
  handleChipFocus,
  searchTypes,
  highlightedIndex,
  setHighlightedIndex,
}: SearchInputPresProps & {
  highlightedIndex: number;
  setHighlightedIndex: (idx: number) => void;
}) {
  // placeholder 텍스트
  let placeholder = '';
  if (searchTypes.length === 1) {
    // 검색 타입 별 placeholder
    if (searchTypes[0] === 'title') placeholder = '제목을 입력하세요';
    if (searchTypes[0] === 'user') placeholder = '유저를 입력하세요';
  } else {
    // 여러 타입
    placeholder = '검색어를 입력하세요';
  }

  return (
    <div ref={containerRef} className={styles.container}>
      {/* 인풋 및 칩 영역 */}
      <div
        className={styles.inputWrapper}
        onClick={() => inputRef.current?.focus()} // 컨테이너 클릭 시 인풋 포커스
      >
        {/* 검색 아이콘 */}
        <MagnifyingGlassIcon className={styles.btnLogo} />

        {/* 칩 목록 렌더링 */}
        {chips.map((chip, idx) => (
          <button
            key={chip.value + idx} // 칩 고유 키
            ref={(el) => {
              // 각 칩의 ref를 배열에 저장
              if (chipRefs.current) chipRefs.current[idx] = el;
            }}
            type="button"
            tabIndex={0}
            className={`
              ${styles.chip}
              ${chip.type === 'tag' ? styles.tag : styles.user}
            `}
            onKeyDown={(e) => handleChipKeyDown(e, idx)}
            onFocus={() => handleChipFocus(idx)}
            aria-label={`칩: ${chip.value}`}
            onClick={() => handleRemoveChip(idx)}
          >
            {chip.value}
            {/* 칩 삭제 버튼 */}
            <span
              className={styles.chipRemove}
              tabIndex={-1}
              aria-label="칩 삭제"
              role="button"
              onKeyDown={(e) => {
                // 칩 엔터/스페이스로 삭제
                if (e.key === 'Enter' || e.key === ' ') {
                  e.stopPropagation();
                  handleRemoveChip(idx);
                }
              }}
            >
              ×
            </span>
          </button>
        ))}

        {/* 입력 필드 */}
        <input
          ref={inputRef}
          className={styles.inputField}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setShowDropdown(true);
          }}
          onClick={() => setShowDropdown((prev) => !prev)}
          onFocus={() => setHighlightedIndex(-1)}
          onKeyDown={handleKeyDown}
          placeholder={chips.length === 0 ? placeholder : ''}
        />
      </div>

      {/* 드롭다운 영역 */}
      {showDropdown && (
        <div className={styles.dropdown}>
          {dropdownItems.length > 0
            ? // 드롭다운에 항목이 있을 때
              dropdownItems.map((item, idx) => (
                <div
                  key={item.key}
                  className={`
                    ${styles.dropdownItem}
                    ${highlightedIndex === idx ? styles.highlighted : ''}
                  `}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    item.onClick();
                  }}
                  onMouseEnter={() => setHighlightedIndex(idx)}
                >
                  {item.label}
                </div>
              ))
            : // 드롭다운에 항목, 입력값 없을 때 안내 문구
              inputValue.trim() === '' && (
                <>
                  <div className={styles.dropdownEmpty}>#: 태그 검색</div>
                  <div className={styles.dropdownEmpty}>@: 유저 검색</div>
                </>
              )}
        </div>
      )}
    </div>
  );
}
