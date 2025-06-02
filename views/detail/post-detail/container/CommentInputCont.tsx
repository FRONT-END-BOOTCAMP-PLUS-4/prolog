'use client';

import { useState } from 'react';
import CommentInputPres from '../presentational/CommentInputPres';
import { useParams } from 'next/navigation';

export default function CommentInputCont() {
  const [text, setText] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const params = useParams();
  const postId = Number(params.id);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async () => {
    if (!text.trim()) return;

    try {
      const response = await fetch('/api/member/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postId,
          content: text.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('댓글 작성 실패!');
      }

      setIsSubmitting(true);
      setText('');
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CommentInputPres
      value={text}
      onChange={onChange}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
    />
  );
}
