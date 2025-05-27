// package
import { ChevronDownIcon } from '@radix-ui/react-icons';

// slice
import styles from '../styles/AiSummaryPres.module.scss';
import { SummaryItem } from '../types';

type AiSummaryPresProps = {
  summaryList: SummaryItem[];
  isOpen: boolean;
  onToggle: () => void;
};

export default function AiSummaryPres({
  summaryList,
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
        <ol style={{ margin: 0, paddingLeft: 20 }}>
          {summaryList.map((item, idx) => (
            <li className={styles.summaryItem} key={idx}>
              {item.title}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
