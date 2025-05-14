// package
import { type JSX } from 'react';
import Image from 'next/image';
// slice
import styles from '../styles/SearchInputPres.module.scss';

export default function SearchInputPres(): JSX.Element {
  return (
    <form className={styles.searchForm}>
        <span className={styles.searchIcon}>
          <Image src="/svgs/search.svg" alt="검색" width={20} height={20} />
        </span>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="찾으시는 글이있나요?"
        />
      </form>
  );
}