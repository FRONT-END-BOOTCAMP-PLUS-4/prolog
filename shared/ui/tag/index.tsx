import { HTMLAttributes, ReactNode } from 'react';

import styles from './Tag.module.scss';

type Props = {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
} & HTMLAttributes<HTMLSpanElement>;

export default function Tag({ children, size = 'sm', ...rest }: Props) {
  const sizeClass = styles[`tag__${size}`];

  return (
    <span className={`${styles.tag} ${sizeClass}`} {...rest}>
      {children}
    </span>
  );
}
