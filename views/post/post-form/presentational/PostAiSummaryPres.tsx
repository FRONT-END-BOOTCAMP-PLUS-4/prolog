import { Dispatch, SetStateAction } from 'react';

import Button from '@/shared/ui/button';
import styles from '../styles/PostAiFormPres.module.scss';
import { useModalStore } from '@/shared/stores/useModalStore';
import { AiSummaryType } from '../types';

type Props = {
  summary: AiSummaryType[] | null;
  isLoading: boolean;
  requestAiSummary: () => void;
  setAiSummary: Dispatch<SetStateAction<AiSummaryType[] | null>>;
  aiSummary: AiSummaryType[] | null;
  setIsAiUsed: Dispatch<SetStateAction<number>>;
};

export default function PostAiSummaryPres({
  summary,
  isLoading,
  requestAiSummary,
  setAiSummary,
  aiSummary,
  setIsAiUsed,
}: Props) {
  const { action } = useModalStore();

  const summaryToDisplay = summary || aiSummary;

  const handleUseSummary = () => {
    setAiSummary(summaryToDisplay);
    action.close();
    setIsAiUsed(1); // 사용함
  };

  const handleCancelSummary = () => {
    setAiSummary(null);
    action.close();
    setIsAiUsed(0); // 사용안함
  };

  // console.log('summary', summaryToDisplay);

  return (
    <div className={styles.bottomSheet} onClick={(e) => e.stopPropagation()}>
      <p className={styles.chatBubble}>
        AI에게 이 글을 요약해서 목차를 받아볼까요?
      </p>

      {!summaryToDisplay && !isLoading && (
        <div className={styles.choices}>
          <Button onClick={requestAiSummary}>네, 부탁해요</Button>
          <Button onClick={() => action.close()}>아니요</Button>
        </div>
      )}

      {(summaryToDisplay || isLoading) && (
        <>
          <div className={styles.result}>
            <title>✨ AI가 제안하는 목차</title>
            <ul>
              {isLoading
                ? Array.from({ length: 4 }).map((_, idx) => (
                    <li key={idx} className={styles.skeletonItem}>
                      <div className={styles.skeletonTitle} />
                      <div className={styles.skeletonText} />
                    </li>
                  ))
                : summaryToDisplay?.map((item, idx) => (
                    <li key={idx} className={styles.summaryItem}>
                      <strong>{item.title}</strong>
                      <p>{item.summary}</p>
                    </li>
                  ))}
            </ul>
          </div>

          {!isLoading && summaryToDisplay && (
            <div className={styles.choices}>
              <Button onClick={handleUseSummary}>사용할래요</Button>
              <Button onClick={requestAiSummary}>다시 만들어줘</Button>
              <Button onClick={handleCancelSummary}>사용 안 할래요</Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
