'use client';

import { useState } from 'react';
import CommentInputPres from '../presentational/CommentInputPres';

export default function CommentInputCont() {
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      onChange={(e) => setText(e.target.value)}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
    />
  );
}
