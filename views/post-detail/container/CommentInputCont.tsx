'use client';

import { useState } from 'react';
import CommentInputPres from '../presentational/CommentInputPres';

export default function CommentInputCont() {
  const [text, setText] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async () => {
    if (!text.trim()) return;

    try {
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
