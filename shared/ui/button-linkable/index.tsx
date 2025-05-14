// package
import { type JSX } from 'react';
import Link from 'next/link';
// slice
import styles from './styles.module.scss';

export default function ButtonLinkable(props: { href?: string, text: string }): JSX.Element {
  const { href, text = 'button' } = props;

  return (
    <>
      {href ? (
        <Link href={href}>
          <span className={`${styles.baseStyle} ${href && styles.linkable}`}>{text}</span>
        </Link>
      ) : (
        <span className={styles.baseStyle}>{text}</span>
      )}
    </>
  );
}
