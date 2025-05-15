// package
import { type JSX } from 'react';
import Image from 'next/image';
// slice
import styles from '../styles/HeaderPres.module.scss';
// layer
import Logo from '@/shared/ui/logo';
import PostsSearchCont from '@/features/search-input';
import ButtonLinkable from '@/shared/ui/button-linkable';

export default function HeaderPres(): JSX.Element {
  return (
    <header className={styles.header}>
      {/* 로고 영역 */}
      <Logo/>

      {/* 검색 폼 */}
      <PostsSearchCont/>
      {/* 네비게이션 */}
      <nav className={styles.nav}>
        {/* <button className={styles.writeBtn}>새글작성</button> */}
        <ButtonLinkable href="/member/story" text="새글작성" />
        <ButtonLinkable text="로그인" />
        <ButtonLinkable text="블로그페이지이동" href='/email/stories/1'/>
        <button className={styles.iconBtn}>
          <Image src="/svgs/alarm.svg" alt="알림" width={24} height={24} />
        </button>
        <button className={styles.iconBtn}>
          <Image src="/svgs/profile.svg" alt="프로필" width={24} height={24} />
        </button>
      </nav>
    </header>
  );
};
