import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import PostAiSummaryPres from '../presentational/PostAiSummaryPres';
import { AiSummaryType } from '../types';

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

type Props = {
  content?: string;
};

export default function PostAiSummaryCont({ content }: Props) {
  const [summary, setSummary] = useState<AiSummaryType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRequested, setIsRequested] = useState(false); // AI 요청 여부

  const requestAiSummary = () => {
    // if (!content || content.length < 500) {
    //   toast.warn('AI 요약은 500자 이상부터 사용할 수 있어요.');
    //   return;
    // }

    /** AI 요청 보내는 로직 작성 */

    setIsRequested(true);
    setIsLoading(true);
    setSummary(null);

    setTimeout(() => {
      setSummary(mockSummary);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover={false}
        draggable={false}
      />
      <PostAiSummaryPres
        summary={summary}
        isLoading={isLoading}
        isRequested={isRequested}
        requestAiSummary={requestAiSummary}
      />
    </>
  );
}
