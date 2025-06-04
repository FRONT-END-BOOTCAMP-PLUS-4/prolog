// package
import { ChevronDownIcon } from '@radix-ui/react-icons';

// slice
import styles from '../styles/AiSummaryPres.module.scss';
import { AiSummaryType } from '@/views/post/post-form/types';

type AiSummaryPresProps = {
  aiSummary: AiSummaryType[];
  isOpen: boolean;
  onToggle: () => void;
};

export default function AiSummaryPres({
  aiSummary,
  isOpen,
  onToggle,
}: AiSummaryPresProps) {
  return (
    <div className={styles.summaryBox}>
      <div className={styles.summaryTitle} onClick={onToggle}>
        <span>AI 목차 요약</span>
        <ChevronDownIcon
          className={`${styles.arrowIcon} ${isOpen ? styles.arrowIconOpen : ''}`}
        />
      </div>
      {isOpen && (
        <ol className={styles.summaryList}>
          {aiSummary?.map((sum, idx) => (
            <li key={idx} className={styles.summaryItem}>
              <div className={styles.itemTitle}>{sum.title}</div>
              <p className={styles.itemSummary}>{sum.summary}</p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
