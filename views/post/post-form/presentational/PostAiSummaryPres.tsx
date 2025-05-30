import Button from '@/shared/ui/button';
import styles from '../styles/PostAiFormPres.module.scss';
import { useModalStore } from '@/shared/stores/useModalStore';
import { AiSummaryType } from '../types';

type Props = {
  summary: AiSummaryType[] | null;
  isLoading: boolean;
  isRequested: boolean;
  requestAiSummary: () => void;
};

export default function PostAiSummaryPres({
  summary,
  isLoading,
  isRequested,
  requestAiSummary,
}: Props) {
  const { action } = useModalStore();

  return (
    <div className={styles.bottomSheet} onClick={(e) => e.stopPropagation()}>
      <p className={styles.chatBubble}>
        AI에게 이 글을 요약해서 목차를 받아볼까요?
      </p>

      {!isRequested && (
        <div className={styles.choices}>
          <Button onClick={requestAiSummary}>네, 부탁해요</Button>
          <Button onClick={() => action.close()}>아니요</Button>
        </div>
      )}

      {isRequested && (
        <>
          <div className={styles.result}>
            <h4>✨ AI가 제안하는 목차</h4>
            <ul>
              {isLoading
                ? Array.from({ length: 4 }).map((_, idx) => (
                    <li key={idx} className={styles.skeletonItem}>
                      <div className={styles.skeletonTitle} />
                      <div className={styles.skeletonText} />
                    </li>
                  ))
                : summary?.map((item, idx) => (
                    <li key={idx} className={styles.summaryItem}>
                      <strong>{item.title}</strong>
                      <p>{item.summary}</p>
                    </li>
                  ))}
            </ul>
          </div>

          {!isLoading && (
            <div className={styles.choices}>
              <Button>사용할래요</Button>
              <Button onClick={requestAiSummary}>다시 만들어줘</Button>
              <Button onClick={() => action.close()}>사용 안 할래요</Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
