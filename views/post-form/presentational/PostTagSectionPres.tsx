'use client';

import { useState, KeyboardEvent } from 'react';

import styles from '../styles/PostTagSeactionPres.module.scss';

import Button from '@/shared/ui/button';

const MAX_TAGS = 20;

type Props = {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function PostTagSectionPres({ tags, setTags }: Props) {
  const [tagInput, setTagInput] = useState<string>('');
  const [isComposing, setIsComposing] = useState<boolean>(false);

  const handleTagInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (isComposing) return; // 조합 중이면 무시

    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (!tags.includes(newTag) && tags.length < MAX_TAGS) {
        setTags((prev) => [...prev, newTag]);
      }
      setTagInput('');
    }
  };

  const handleTagDelete = (tagToDelete: string) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <div className={styles.tagWrapper}>
      <input
        type="text"
        placeholder="태그 입력"
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        onKeyDown={handleTagInputKeyDown}
        onCompositionStart={() => setIsComposing(true)} // 한글 조합 시작
        onCompositionEnd={() => setIsComposing(false)} // 한글 조합 끝
        className={styles.tagInput}
        disabled={tags.length >= MAX_TAGS}
      />
      <div className={styles.tagList}>
        {tags.map((tag) => (
          <Button key={tag} asChild onClick={() => handleTagDelete(tag)}>
            <span className={styles.tag}>#{tag} ✕</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
