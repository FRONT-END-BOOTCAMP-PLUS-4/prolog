// package
import { type JSX } from 'react';
import Link from 'next/link';
// slice
import styles from './styles.module.scss';

export default function Logo(): JSX.Element {
  return (
    <Link href="/">
      <div className={styles.logo}>
        <span className={styles.logo__text}>Prolog</span>
      </div>
    </Link>
  );
}
