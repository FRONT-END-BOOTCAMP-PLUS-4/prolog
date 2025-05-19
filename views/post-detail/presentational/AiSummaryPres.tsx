import styles from '../styles/AiSummaryPres.module.scss';

type SummaryItem = {
  title: string;
};

type Props = {
  summaryList: SummaryItem[];
};

export default function AiSummaryPres({ summaryList }: Props) {
  console.log('summaryList', summaryList);
  return (
    <div className={styles.summaryBox}>
      <div className={styles.summaryTitle}>AI 목차 요약</div>
      <ol>
        {summaryList?.map((item, index) => (
          <li key={index} className={styles.summaryItem}>
            {item.title}
          </li>
        ))}
      </ol>
    </div>
  );
}
