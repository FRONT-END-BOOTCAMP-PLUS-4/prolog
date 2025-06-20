'use client';

// package
import { useState } from 'react';

// slice
import AiSummaryPres from '../presentational/AiSummaryPres';
import { AiSummaryType } from '@/views/post/post-form/types';

export default function AiSummaryCont({
  aiSummary,
}: { aiSummary: AiSummaryType[] }) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <AiSummaryPres
      aiSummary={aiSummary}
      isOpen={isOpen}
      onToggle={handleToggle}
    />
  );
}
