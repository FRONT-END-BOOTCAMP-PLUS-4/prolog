'use client';
import { useEffect, useState } from 'react';
import styles from './Modal.module.scss';
import { useModalStore } from '@/shared/stores/useModalStore';

export default function Modal() {
  const { isChildren, position } = useModalStore((state) => state);
  const { close } = useModalStore((state) => state.action);
  const [isAnimating, setIsAnimating] = useState(false);
  const positionClass =
    styles[`modalContainer__${position}`] || styles.modalContainer__bottom;

  useEffect(() => {
    if (isChildren) {
      // 스크롤 방지
      document.body.style.overflow = 'hidden';
    } else {
      // 스크롤 해제
      document.body.style.overflow = '';
    }
    // 언마운트 시 스크롤 해제
    return () => {
      document.body.style.overflow = '';
    };
  }, [isChildren]);

  useEffect(() => {
    if (!isChildren) return setIsAnimating(false);

    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 50);

    return () => {
      if (timer !== null) {
        clearTimeout(timer);
      }
    };
  }, [isChildren]);

  if (!isChildren) return null;
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.modalContainer} ${isAnimating ? styles.open : ''} ${positionClass}`}
        onClick={() => close()}
      >
        <div onClick={handleContentClick}>{isChildren}</div>
      </div>
    </div>
  );
}
