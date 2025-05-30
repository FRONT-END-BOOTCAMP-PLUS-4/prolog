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

  return (
    <div className={styles.container}>
      <div
        className={`${styles.modalContainer} ${isAnimating ? styles.open : ''} ${positionClass}`}
        onClick={() => close()}
      >
        <div>{isChildren}</div>
      </div>
    </div>
  );
}
