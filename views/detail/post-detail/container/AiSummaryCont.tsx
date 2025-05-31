'use client';

// package
import { useState } from 'react';

// slice
import AiSummaryPres from '../presentational/AiSummaryPres';

export default function AiSummaryCont({ aiSummary }: { aiSummary: string }) {
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
