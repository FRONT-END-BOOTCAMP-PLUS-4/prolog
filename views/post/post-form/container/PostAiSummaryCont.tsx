import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import PostAiSummaryPres from '../presentational/PostAiSummaryPres';
import { AiSummaryType } from '../types';

type Props = {
  content?: string;
};

export default function PostAiSummaryCont({ content }: Props) {
  const [summary, setSummary] = useState<AiSummaryType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRequested, setIsRequested] = useState(false); // AI 요청 여부

  const requestAiSummary = async () => {
    if (!content || content.length < 500) {
      toast.warn('AI 요약은 500자 이상부터 사용할 수 있어요.');
      return;
    }

    setIsRequested(true);
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        body: JSON.stringify(content),
      });

      const aiSummary = await response.json();

      setSummary(aiSummary);
    } catch (err) {
      toast.error('AI 요약 요청 중 문제가 발생했어요.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
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
