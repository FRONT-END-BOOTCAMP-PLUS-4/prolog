import { useState } from 'react';

import Button from '@/shared/ui/button';
import styles from '../styles/PostAiFormPres.module.scss';
import { useModalStore } from '@/shared/stores/useModalStore';

type AiSummaryType = {
  title: string;
  summary: string;
};

const mockSummary = [
  {
    title: '프로젝트 개요',
    summary: '프로젝트의 목적과 배경에 대해 간략히 설명합니다.',
  },
  {
    title: '사용한 기술 스택',
    summary: '프론트엔드, 백엔드, 인프라 등 사용된 주요 기술들을 소개합니다.',
  },
  {
    title: '주요 기능 소개',
    summary: '핵심 기능들과 사용자 흐름을 요약합니다.',
  },
  {
    title: '문제 해결 과정',
    summary: '개발 중 겪은 문제들과 해결 방법을 설명합니다.',
  },
  {
    title: '회고 및 개선점',
    summary: '프로젝트를 통해 얻은 인사이트와 앞으로의 개선 방향을 공유합니다.',
  },
];

export default function PostAiFormPres() {
  const [isRequested, setIsRequested] = useState(false); // 요청 여부
  const [isLoading, setIsLoading] = useState(false); // 로딩 중 여부
  const [summary, setSummary] = useState<AiSummaryType[] | null>(null);

  const { action } = useModalStore();

  const requestAiSummary = () => {
    console.log('AI 요약 요청 시작');
    setIsRequested(true);
    setIsLoading(true);
    setSummary(null);

    setTimeout(() => {
      setSummary(mockSummary);
      setIsLoading(false);
    }, 2000);
  };

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
