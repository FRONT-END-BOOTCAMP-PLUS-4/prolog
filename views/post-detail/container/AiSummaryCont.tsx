// package
import { useState } from 'react';

// slice
import AiSummaryPres from '../presentational/AiSummaryPres';
import { SummaryItem } from '../types';

export default function AiSummaryCont() {
  const summaryList: SummaryItem[] = [
    { title: '제목1' },
    { title: '제목2' },
    { title: '제목3' },
    { title: '제목4' },
    { title: '제목5' },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <AiSummaryPres
      summaryList={summaryList}
      isOpen={isOpen}
      onToggle={handleToggle}
    />
  );
}
