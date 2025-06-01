import { Dispatch, SetStateAction, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import PostAiSummaryPres from '../presentational/PostAiSummaryPres';
import { AiSummaryType } from '../types';

type Props = {
  content?: string;
  setAiSummary: Dispatch<SetStateAction<AiSummaryType[] | null>>;
  aiSummary: AiSummaryType[] | null;
  setIsAiUsed: Dispatch<SetStateAction<number>>;
};

export default function PostAiSummaryCont({
  content,
  setAiSummary,
  aiSummary,
}: Props) {
  const [summary, setSummary] = useState<AiSummaryType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const requestAiSummary = async () => {
    if (!content || content.length < 500) {
      toast.warn('500자 이상부터 사용할 수 있어요.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/summarize', {
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
        setAiSummary={setAiSummary}
        isLoading={isLoading}
        requestAiSummary={requestAiSummary}
        aiSummary={aiSummary}
      />
    </>
  );
}
