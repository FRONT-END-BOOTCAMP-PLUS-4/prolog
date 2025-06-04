'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import styles from './styles/NotFound.module.scss';
import { useThemeStore } from '@/shared/stores/useThemeStore';

export default function NotFound() {
  const router = useRouter();
  const { theme } = useThemeStore();

  return (
    <div className={styles.container}>
      <Image
        src={
          theme === 'dark' ? '/images/notFoundDk.png' : '/images/notFound.png'
        }
        alt="404 not found"
        width={400}
        height={400}
        className={styles.image}
      />
      <h1 className={styles.message}>없는 페이지예요</h1>
      <button className={styles.button} onClick={() => router.push('/')}>
        메인으로 가기
      </button>
    </div>
  );
}
