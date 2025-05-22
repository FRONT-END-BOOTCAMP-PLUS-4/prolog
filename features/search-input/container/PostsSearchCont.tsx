'use client';

// package
import React, { useRef, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import useOnClickOutside from '@/shared/hooks/useOnClickOutside';
import SmartSearchInputPres from '../presentational/SearchInputPres';

// slice
import type { Chip, DropdownItem, PostsSearchContProps } from '../types';
import { getMode } from '../types';

export default function PostsSearchCont({
  // 검색 타입 기본값
  searchTypes = ['title', 'user', 'tag'],
}: PostsSearchContProps) {
  // 칩 검색 조건
  const [chips, setChips] = useState<Chip[]>([]);
  // 입력창 값
  const [inputValue, setInputValue] = useState('');
  // 드롭다운 표시
  const [showDropdown, setShowDropdown] = useState(false);
  // 드롭다운에서 키보드로 선택된 항목 인덱스
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  // input, 컨테이너, 칩 버튼 ref
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chipRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // 경로 변경 감지
  const pathname = usePathname();
  useEffect(() => {
    setInputValue('');
    setChips([]);
    setShowDropdown(false);
  }, [pathname]);

  // 칩 포커스 시 해당 칩이 보이도록 스크롤
  const handleChipFocus = (idx: number) => {
    if (chipRefs.current && chipRefs.current[idx]) {
      chipRefs.current[idx]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  // 더미 데이터
  const tagLabels = ['#React', '#JavaScript', '#TypeScript', '#Next'];
  const userLabels = ['@윤준영', '@서유덕', '@장준익', '@유대현', '@한채연'];
  const titleLabels = [
    '타이틀을 검색합니다',
    '타입스크립트 공부 했습니다.',
    '멋쟁이 사자처럼',
  ];

  // 드롭다운 항목
  let dropdownItems: DropdownItem[] = [];
  // 현재 입력값에 따른 검색 모드 결정
  const mode = getMode(inputValue, searchTypes);

  // 알림
  const [toast, setToast] = useState<string | null>(null);

  // 토스트 메시지
  function showToast(message: string) {
    setToast(message);
    setTimeout(() => setToast(null), 1000);
  }

  // 칩 중복 방지, 포커스 복원
  const handleAddChip = (chip: Chip) => {
    const normalizedValue = chip.value.trim().toLowerCase();
    const isDuplicate = chips.some(
      (c) =>
        c.type === chip.type &&
        c.value.trim().toLowerCase() === normalizedValue,
    );
    if (isDuplicate) {
      showToast('이미 추가된 태그입니다.');
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
      return;
    }
    setChips((prev) => [...prev, { ...chip, value: chip.value.trim() }]);
    setInputValue('');
    setShowDropdown(false);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  // 칩 마지막 타입에 따라 입력 제어
  const handleInputChange = (value: string) => {
    if (chips.length > 0) {
      const lastChip = chips[chips.length - 1];
      if (value === '') {
        setInputValue('');
        return;
      }
      if (lastChip.type === 'tag' && value[0] !== '#') {
        return;
      }
      if (lastChip.type === 'user' && value[0] !== '@') {
        return;
      }
    }
    setInputValue(value);
  };

  // 드롭다운 항목 생성
  if (inputValue.trim() === '') {
    dropdownItems = [];
  } else if (mode === 'tag') {
    dropdownItems = tagLabels
      .filter((t) => t.toLowerCase().includes(inputValue.trim().toLowerCase()))
      .filter(
        (t) =>
          !chips.some(
            (c) =>
              c.type === 'tag' &&
              c.value.trim().toLowerCase() === t.trim().toLowerCase(),
          ),
      )
      .map((label, idx) => ({
        key: `tag-${idx}`,
        label,
        onClick: () => {
          handleAddChip({ type: 'tag', value: label.trim() });
          setHighlightedIndex(-1);
        },
      }));
  } else if (mode === 'user') {
    dropdownItems = userLabels
      .filter((u) => u.toLowerCase().includes(inputValue.trim().toLowerCase()))
      .filter(
        (u) =>
          !chips.some(
            (c) =>
              c.type === 'user' &&
              c.value.trim().toLowerCase() === u.trim().toLowerCase(),
          ),
      )
      .map((label, idx) => ({
        key: `user-${idx}`,
        label,
        onClick: () => {
          handleAddChip({ type: 'user', value: label.trim() });
          setHighlightedIndex(-1);
        },
      }));
  } else if (mode === 'title') {
    dropdownItems = titleLabels
      .filter((title) => title.includes(inputValue.trim()))
      .map((label, idx) => ({
        key: `title-${idx}`,
        label,
        onClick: () => {
          setInputValue(label);
          setShowDropdown(false);
          setTimeout(() => {
            inputRef.current?.focus();
          }, 0);
          setHighlightedIndex(-1);
        },
      }));
  }

  // 칩 삭제
  const handleRemoveChip = (idx: number) => {
    setChips(chips.filter((_, i) => i !== idx));
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  // input 키보드 이벤트
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const cursorAtStart = input.selectionStart === 0;

    // 왼쪽 화살표: 칩 포커스
    if (e.key === 'ArrowLeft' && chips.length > 0 && cursorAtStart) {
      chipRefs.current[chips.length - 1]?.focus();
      e.preventDefault();
      return;
    }

    // 드롭다운 키보드 내비게이션 ( 위 / 아래 / 엔터 / esc )
    if (showDropdown && dropdownItems.length > 0) {
      if (e.key === 'ArrowDown') {
        setHighlightedIndex((prev) => (prev + 1) % dropdownItems.length);
        e.preventDefault();
        return;
      }
      if (e.key === 'ArrowUp') {
        setHighlightedIndex((prev) =>
          prev <= 0 ? dropdownItems.length - 1 : prev - 1,
        );
        e.preventDefault();
        return;
      }
      if (e.key === 'Enter' && highlightedIndex >= 0) {
        dropdownItems[highlightedIndex].onClick();
        setHighlightedIndex(-1);
        e.preventDefault();
        return;
      }
      if (e.key === 'Escape') {
        setShowDropdown(false);
        setHighlightedIndex(-1);
        e.preventDefault();
        return;
      }
    }

    // input이 비었고 칩이 있을 때 엔터: 칩 타입별 검색
    if (e.key === 'Enter' && inputValue.trim() === '' && chips.length > 0) {
      const lastType = chips[chips.length - 1].type;

      if (lastType === 'user') {
        const userValues = chips
          .filter((chip) => chip.type === 'user')
          .map((chip) => chip.value);
        alert(`유저 검색: ${userValues.join(', ')}`);
      } else if (lastType === 'tag') {
        const tagValues = chips
          .filter((chip) => chip.type === 'tag')
          .map((chip) => chip.value);
        alert(`태그 검색: ${tagValues.join(', ')}`);
      } else {
        alert(`전체 칩 검색: ${chips.map((chip) => chip.value).join(', ')}`);
      }

      setChips([]);
      setShowDropdown(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
      e.preventDefault();
      return;
    }

    // input에 값이 있을 때 엔터: 칩 추가 또는 검색
    if (e.key === 'Enter' && inputValue.trim()) {
      if (chips.length > 0) {
        const lastType = chips[chips.length - 1].type;
        if (lastType === 'tag' && inputValue[0] === '#') {
          handleAddChip({ type: 'tag', value: inputValue.trim() });
          e.preventDefault();
          return;
        }
        if (lastType === 'user' && inputValue[0] === '@') {
          handleAddChip({ type: 'user', value: inputValue.trim() });
          e.preventDefault();
          return;
        }
      } else {
        // 칩이 없을 때
        if (mode === 'tag') {
          handleAddChip({ type: 'tag', value: inputValue.trim() });
          e.preventDefault();
          return;
        }
        if (mode === 'user') {
          handleAddChip({ type: 'user', value: inputValue.trim() });
          e.preventDefault();
          return;
        }
        if (mode === 'title') {
          alert(`타이틀 검색: ${inputValue}`);
          setInputValue('');
          setChips([]);
          setShowDropdown(false);
          setTimeout(() => {
            inputRef.current?.focus();
          }, 0);
          e.preventDefault();
          return;
        }
      }
    }

    // 백스페이스: input이 비어있고 칩이 있을 때 칩 삭제
    if (e.key === 'Backspace' && inputValue === '' && chips.length > 0) {
      setChips(chips.slice(0, -1));
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  // 칩 버튼에서 키보드 좌우 이동, 삭제
  const handleChipKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    idx: number,
  ) => {
    if (e.key === 'ArrowLeft' && idx > 0) {
      chipRefs.current[idx - 1]?.focus();
      e.preventDefault();
      return;
    }
    if (e.key === 'ArrowRight') {
      if (idx < chips.length - 1) {
        chipRefs.current[idx + 1]?.focus();
      } else {
        inputRef.current?.focus();
      }
      e.preventDefault();
      return;
    }
    if (e.key === 'Backspace' || e.key === 'Delete') {
      handleRemoveChip(idx);
      setTimeout(() => {
        if (chips.length === 1) {
          inputRef.current?.focus();
        } else if (idx > 0) {
          chipRefs.current[idx - 1]?.focus();
        } else if (chips.length > 1) {
          chipRefs.current[0]?.focus();
        }
      }, 0);
    }
  };

  useOnClickOutside(containerRef, () => setShowDropdown(false), showDropdown);

  // 드롭다운이 열릴 때마다 highlight 인덱스 초기화
  useEffect(() => {
    if (showDropdown) setHighlightedIndex(-1);
  }, [showDropdown, inputValue]);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      {/* 토스트 알림 UI */}
      {toast && (
        <div
          style={{
            position: 'absolute',
            top: 3,
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#333',
            color: '#fff',
            padding: '8px 20px',
            borderRadius: 8,
            fontSize: 15,
            zIndex: 100,
            pointerEvents: 'none',
            opacity: 0.95,
            boxShadow: '0 2px 8px #0002',
          }}
        >
          {toast}
        </div>
      )}

      <SmartSearchInputPres
        chips={chips}
        inputValue={inputValue}
        setInputValue={handleInputChange}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        inputRef={inputRef}
        containerRef={containerRef}
        chipRefs={chipRefs}
        dropdownItems={dropdownItems}
        handleRemoveChip={handleRemoveChip}
        handleKeyDown={handleKeyDown}
        handleChipKeyDown={handleChipKeyDown}
        handleChipFocus={handleChipFocus}
        searchTypes={searchTypes}
        highlightedIndex={highlightedIndex}
        setHighlightedIndex={setHighlightedIndex}
      />
    </div>
  );
}
