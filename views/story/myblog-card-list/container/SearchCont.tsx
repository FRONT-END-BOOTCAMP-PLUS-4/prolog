// src/features/search-input/hooks/useSearchInput.ts
import { useState, useRef, useEffect } from 'react';
import type {
  Chip,
  DropdownItem,
  Post,
  PostsSearchContProps,
} from '@/features/search-input/types';
import { getMode } from '@/features/search-input/types';
import { toast, ToastContainer } from 'react-toastify';
import SearchPres from '../presentational/SearchPres';
import { useOnClickOutside } from '@/shared/hooks/useOnClickOutside';
import { useSearch } from '@/shared/contexts/SearchContext';
import { usePathname, useRouter } from 'next/navigation';
import { useNavigateWithSearchParams } from '@/views/story/myblog-card-list/hook/useNavigateWithSearchParams';

interface UseSearchInputArgs {
  /**
   * - onSearchParamsChange: 사용자가 엔터를 치거나 chip을 추가/삭제해서
   *   “검색 파라미터가 변경되었다”고 판단되는 순간 호출됨
   *   → 이때 onSearchParamsChange(args) 안에서 실제 URL을 바꾸거나
   *     API를 호출하는 코드를 페이지(컨테이너)가 직접 구현함
   */
  onSearchParamsChange: (params: {
    name?: string;
    tags?: string[];
    title?: string;
    content?: string;
  }) => void;
}

// 칩 중복 체크
const isDuplicateChip = (chips: Chip[], chip: Chip) =>
  chips.some(
    (c) =>
      c.type === chip.type &&
      c.value.trim().toLowerCase() === chip.value.trim().toLowerCase(),
  );

// 칩 값 정규화
const normalizeChipValue = (value: string) => value.trim();

// 드롭다운 항목
const makeDropdownItems = (
  labels: string[],
  type: Chip['type'],
  chips: Chip[],
  inputValue: string,
  handleAddChip: (chip: Chip) => void,
  setHighlightedIndex: (idx: number) => void,
) =>
  labels
    .filter((label) =>
      label.toLowerCase().includes(inputValue.trim().toLowerCase()),
    )
    .filter(
      (label) =>
        !chips.some(
          (c) =>
            c.type === type &&
            c.value.trim().toLowerCase() === label.trim().toLowerCase(),
        ),
    )
    .map((label, idx) => ({
      key: `${type}-${idx}`,
      label,
      onClick: () => {
        handleAddChip({ type, value: label.trim() });
        setHighlightedIndex(-1);
      },
    }))
    .slice(0, 10);

function isAllowedInput({ chips, value }: { chips: Chip[]; value: string }) {
  const hasUserChip = chips.some((chip) => chip.type === 'user');
  const hasTagChip = chips.some((chip) => chip.type === 'tag');
  if (chips.length > 0) {
    const lastType = chips[chips.length - 1].type;
    if (lastType === 'user') {
      // 빈 값만 허용 (입력 불가)
      return value === '';
    }
    if (lastType === 'tag') {
      return value.startsWith('#') || value === '';
    }
  }
  if (hasUserChip && !value.startsWith('@') && value !== '') return false;
  if (hasTagChip && !value.startsWith('#') && value !== '') return false;
  return true;
}

export default function SearchCont({
  searchTypes = ['title', 'content', 'user', 'tag'],
  onSearch,
}: PostsSearchContProps & {
  onSearch?: (params: {
    name?: string;
    tags?: string[];
    title?: string;
    content?: string;
  }) => void;
}) {
  const [chips, setChips] = useState<Chip[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [tagLabels, setTagLabels] = useState<string[]>([]);
  const [userLabels, setUserLabels] = useState<string[]>([]);
  const [titleLabels, setTitleLabels] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chipRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const navigateWithSearchParams = useNavigateWithSearchParams();

  const pathname = usePathname();
  const router = useRouter();

  // 페이지 이동 시 전체 상태 초기화
  useEffect(() => {
    resetAll();
  }, [pathname]);

  // 최초 마운트 시 포스트 데이터 fetch 및 라벨 세팅
  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        const posts: Post[] = data.data || [];

        const tags = Array.from(
          new Set(posts.flatMap((post) => post.tags || [])),
        )
          .filter((tag): tag is string => typeof tag === 'string')
          .map((tag) => `#${tag}`)
          .sort((a, b) => a.localeCompare(b));

        const userNames = Array.from(new Set(posts.map((post) => post.name)))
          .filter((name): name is string => typeof name === 'string')
          .map((name) => `@${name}`)
          .sort((a, b) => a.localeCompare(b));

        const titles = Array.from(new Set(posts.map((post) => post.title)))
          .filter((title): title is string => typeof title === 'string')
          .sort((a, b) => a.localeCompare(b));

        setTagLabels(tags);
        setUserLabels(userNames);
        setTitleLabels(titles);
      });
  }, []);

  // 칩 추가 및 포커스 복원
  const handleAddChip = (chip: Chip) => {
    if (isDuplicateChip(chips, chip)) {
      toast.warn('이미 추가된 태그입니다.');
      restoreInputFocus();
      return;
    }
    setChips((prev) => [
      ...prev,
      { ...chip, value: normalizeChipValue(chip.value) },
    ]);
    setInputValue('');
    setShowDropdown(false);
    setTimeout(() => {
      chipRefs.current[chips.length]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'end',
      });
      restoreInputFocus();
    }, 0);
  };

  // 칩 삭제
  const handleRemoveChip = (idx: number) => {
    const newChips = chips.filter((_, i) => i !== idx);
    setChips(newChips);
    if (newChips.length === 0 && inputValue.trim() === '') resetAll();
    restoreInputFocus();
  };

  // 인풋 포커스 복원
  const restoreInputFocus = () =>
    setTimeout(() => inputRef.current?.focus(), 0);

  // 전체 상태 초기화
  const { setSearchParams } = useSearch();
  const resetAll = () => {
    setChips([]);
    setInputValue('');
    setShowDropdown(false);
    setSearchParams({});
    if (onSearch) onSearch({});
  };

  // 드롭다운 항목 결정
  const mode = getMode(inputValue, searchTypes);
  let dropdownItems: DropdownItem[] = [];
  if (mode === 'tag')
    dropdownItems = makeDropdownItems(
      tagLabels,
      'tag',
      chips,
      inputValue,
      handleAddChip,
      setHighlightedIndex,
    );
  else if (mode === 'user')
    dropdownItems = makeDropdownItems(
      userLabels,
      'user',
      chips,
      inputValue,
      handleAddChip,
      setHighlightedIndex,
    );
  else if (mode === 'title' && inputValue.trim() !== '')
    dropdownItems = titleLabels
      .filter((title) => title.includes(inputValue.trim()))
      .map((label, idx) => ({
        key: `title-${idx}`,
        label,
        onClick: () => {
          setInputValue(label);
          setShowDropdown(false);
          restoreInputFocus();
          setHighlightedIndex(-1);
        },
      }))
      .slice(0, 10);

  // 입력값 변경
  const handleInputChange = (value: string) => {
    if (!isAllowedInput({ chips, value })) return;
    setInputValue(value);
    setTimeout(
      () =>
        inputRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'end',
        }),
      0,
    );
    if (value === '' && chips.length === 0) resetAll();
  };

  // 검색 실행
  const triggerSearch = () => {
    const params: {
      name?: string;
      tags?: string[];
      title?: string;
      content?: string;
    } = {};
    chips.forEach((chip) => {
      if (chip.type === 'tag') {
        params.tags = params.tags || [];
        params.tags.push(chip.value.replace(/^#/, ''));
      }
      if (chip.type === 'user') {
        params.name = chip.value.replace(/^@/, '');
      }
    });
    if (
      inputValue &&
      !inputValue.startsWith('#') &&
      !inputValue.startsWith('@')
    ) {
      params.title = inputValue.trim();
      params.content = inputValue.trim();
    }
    if (onSearch) onSearch(params);
    setSearchParams(params);
    setShowDropdown(false);

    // 검색 실행 시 홈으로 이동
    const urlParams = new URLSearchParams();
    if (params.name) urlParams.append('name', params.name);
    if (params.tags) params.tags.forEach((tag) => urlParams.append('tag', tag));
    if (params.title) urlParams.append('title', params.title);
    if (params.content) urlParams.append('content', params.content);

    // 현재 페이지가 홈이 아니면 홈으로 이동
    if (pathname !== '/') {
      router.push('/?' + urlParams.toString());
    } else {
      router.push('/?' + urlParams.toString());
    }
    navigateWithSearchParams(params);
  };

  // 인풋에서 키보드 이벤트 (입력 제한 적용)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const cursorAtStart = input.selectionStart === 0;

    // 칩 포커싱
    if (e.key === 'ArrowLeft' && chips.length > 0 && cursorAtStart) {
      chipRefs.current[chips.length - 1]?.focus();
      e.preventDefault();
      return;
    }
    // 드롭다운 내 키보드 네비게이션
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

    // 칩이 있을 때 엔터로 검색
    if (e.key === 'Enter' && inputValue.trim() === '' && chips.length > 0) {
      triggerSearch();
      restoreInputFocus();
      e.preventDefault();
      return;
    }
    // 칩 추가/검색
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
          triggerSearch();
          restoreInputFocus();
          e.preventDefault();
          return;
        }
      }
    }

    // 칩 삭제
    if (e.key === 'Backspace' && inputValue === '' && chips.length > 0) {
      handleRemoveChip(chips.length - 1);
    }

    // 입력값이 허용되지 않으면 키 입력 무시
    if (
      e.key.length === 1 && // 문자 입력일 때만
      !isAllowedInput({ chips, value: inputValue + e.key })
    ) {
      e.preventDefault();
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
      if (idx < chips.length - 1) chipRefs.current[idx + 1]?.focus();
      else restoreInputFocus();
      e.preventDefault();
      return;
    }
    if (e.key === 'Backspace' || e.key === 'Delete') {
      handleRemoveChip(idx);
      setTimeout(() => {
        if (chips.length <= 1) restoreInputFocus();
        else if (idx > 0) chipRefs.current[idx - 1]?.focus();
        else chipRefs.current[0]?.focus();
      }, 0);
    }
  };

  // 타입에 따른 입력 제한 안내 메시지
  const getInputRestrictionMessage = () => {
    if (chips.length === 0) return '';
    const lastType = chips[chips.length - 1].type;
    if (lastType === 'user') return '한 명의 유저만 입력 가능합니다.';
    if (lastType === 'tag') return '#태그만 입력 가능합니다.';
    return '';
  };

  useOnClickOutside(containerRef, () => setShowDropdown(false), showDropdown);

  useEffect(() => {
    if (showDropdown) setHighlightedIndex(-1);
  }, [showDropdown, inputValue]);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        closeOnClick
        pauseOnHover={false}
        draggable={false}
      />
      <SearchPres
        chips={chips}
        inputRef={inputRef}
        chipRefs={chipRefs}
        inputValue={inputValue}
        containerRef={containerRef}
        showDropdown={showDropdown}
        highlightedIndex={highlightedIndex}
        searchTypes={searchTypes}
        dropdownItems={dropdownItems}
        handleKeyDown={handleKeyDown}
        setInputValue={handleInputChange}
        setShowDropdown={setShowDropdown}
        handleRemoveChip={handleRemoveChip}
        handleChipKeyDown={handleChipKeyDown}
        setHighlightedIndex={setHighlightedIndex}
        inputRestrictionMessage={getInputRestrictionMessage()}
        handleChipFocus={(idx) =>
          chipRefs.current[idx]?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
          })
        }
      />
    </div>
  );
}
