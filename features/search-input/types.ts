import { RefObject } from 'react';

export type SearchType = 'title' | 'user' | 'tag';

export type Chip = {
  type: 'tag' | 'user';
  value: string;
};

export type DropdownItem = {
  key: string;
  label: string;
  onClick: () => void;
};

export type SearchInputPresProps = {
  chips: Chip[];
  inputValue: string;
  setInputValue: (v: string) => void;
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: RefObject<HTMLInputElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
  chipRefs: RefObject<(HTMLButtonElement | null)[]>;
  dropdownItems: DropdownItem[];
  handleRemoveChip: (idx: number) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChipKeyDown: (
    e: React.KeyboardEvent<HTMLButtonElement>,
    idx: number,
  ) => void;
  handleChipFocus: (idx: number) => void;
  searchTypes: SearchType[];
};

export type PostsSearchContProps = {
  searchTypes?: SearchType[];
};

export function getMode(
  input: string,
  enabledTypes: SearchType[],
): SearchType | null {
  if (enabledTypes.length === 1) {
    return enabledTypes[0];
  }
  if (enabledTypes.includes('tag') && input.startsWith('#')) return 'tag';
  if (enabledTypes.includes('user') && input.startsWith('@')) return 'user';
  if (enabledTypes.includes('title')) return 'title';
  return null;
}
