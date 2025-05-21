'use client';
// package
import { useState } from 'react';
// slice
import LikeButtonPres from '../presentational/LikeButtonPres';

export default function LikeButtonCont() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(16);

  const toggleLike = () => {
    if (liked) {
      setCount((prev) => prev - 1);
    } else {
      setCount((prev) => prev + 1);
    }
    setLiked((prev) => !prev);
  };

  return <LikeButtonPres liked={liked} count={count} onClick={toggleLike} />;
}
