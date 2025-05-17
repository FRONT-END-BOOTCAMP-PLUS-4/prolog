// package
import { type JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// slice
import styles from '../styles/HeaderPres.module.scss';
// layer
import Logo from '@/shared/ui/logo';
import PostsSearchCont from '@/features/search-input';
import Button from '@/shared/ui/button';


export default function HeaderPres(): JSX.Element {

  return (
    <header className={styles.header}>
      {/* 로고 영역 */}
      <Logo/>

      {/* 검색 폼 */}
      <PostsSearchCont/>

      {/* 네비게이션 */}
      <nav className={styles.nav}>

        <Button variants='purple' size='small' asChild>
          <Link href='/member/story'>새글작성</Link>
        </Button>

        <Button variants='purple' size='small'>로그인</Button>

        <button className={styles.iconBtn} >
          <Image src="/svgs/alarm.svg" alt="알림" width={24} height={24} />
        </button>
        <button className={styles.iconBtn}>
          <Image src="/svgs/profile.svg" alt="프로필" width={24} height={24} />
        </button>

        {/* 개발편의성을 위한 임시버튼 */}
        <Button variants='purple' size='small' asChild>
          <Link href='/email/stories'>블로그페이지</Link>
        </Button>

        {/* 개발편의성을 위한 임시버튼 */}
        <Button variants='purple' size='small' asChild>
          <Link href='/email/stories/1'>상세페이지</Link>
        </Button>

        {/* 개발편의성을 위한 임시버튼 */}
        <Button variants='purple' size='small' asChild>
          <Link href='/member/setting'>설정페이지</Link>
        </Button>

      </nav>
    </header>
  );
};
