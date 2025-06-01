'use client';
// package
import { useState } from 'react';
// slice
import LikeButtonPres from '../presentational/LikeButtonPres';

type Props = {
  isLiked: boolean;
  likeCount: number;
};

export default function LikeButtonCont({ isLiked, likeCount }: Props) {
  const [liked, setLiked] = useState(isLiked);
  const [count, setCount] = useState(likeCount);

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
