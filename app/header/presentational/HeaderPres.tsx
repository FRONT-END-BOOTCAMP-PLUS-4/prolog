'use client';

// package
import { useState, useRef, useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Cross2Icon,
  BellIcon,
  Pencil1Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon,
} from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

// slice
import styles from '../styles/HeaderPres.module.scss';

// layer
import PostsSearchCont from '@/features/search-input';
import Button from '@/shared/ui/button';
import { useModalStore } from '@/shared/stores/useModalStore';
import { LoginForm } from '@/widgets/login';
import { useThemeStore } from '@/shared/stores/useThemeStore';
import { NotificationModalCont } from '@/widgets/notification';
import { useOnClickOutside } from '@/shared/hooks/useOnClickOutside';
import { useLockBodyScroll } from '@/shared/hooks/useLockBodyScroll';
import { usePostEditorStore } from '@/views/post/stores/usePostEditorStore';

type Props = {
  username: string;
  profileImg: string;
};

export default function HeaderPres({ username, profileImg }: Props) {
  const router = useRouter();

  const { open } = useModalStore((state) => state.action);
  // 로그인 여부
  const { data } = useSession();
  // 검색창 표시 여부
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  // 프로필 드롭다운 표시 여부
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] =
    useState(false);

  const { theme, toggleTheme } = useThemeStore();

  const [searchKey, setSearchKey] = useState(0);

  const [isNotificationDropdownVisible, setIsNotificationDropdownVisible] =
    useState(false);

  const handleLogoClick = () => {
    setSearchKey((prev) => prev + 1); // key를 변경하면 컴포넌트가 remount되어 state가 초기화됨
  };

  // 드롭다운, 검색창 영역 ref
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchWrapperRef = useRef<HTMLDivElement>(null);

  const notificationDropdownRef = useRef<HTMLDivElement>(null);

  const searchRef = useRef<{ resetAll: () => void }>(null);

  useLockBodyScroll(isNotificationDropdownVisible || isProfileDropdownVisible);

  const { clearSelectedPost } = usePostEditorStore();

  // 검색창 영역 밖 클릭 시 검색창 닫기
  useOnClickOutside(
    searchWrapperRef,
    () => {
      if (isSearchVisible) setIsSearchVisible(false);
    },
    isSearchVisible,
  );

  // 프로필 드롭다운 영역 밖 클릭 시 드롭다운 닫기
  useOnClickOutside(
    dropdownRef,
    () => {
      if (isProfileDropdownVisible) setIsProfileDropdownVisible(false);
    },
    isProfileDropdownVisible,
  );

  // 알람 드롭다운 영역 밖 클릭 시 드롭다운 닫기
  useOnClickOutside(
    notificationDropdownRef,
    () => {
      if (isNotificationDropdownVisible)
        setIsNotificationDropdownVisible(false);
    },
    isNotificationDropdownVisible,
  );

  // 로그인 버튼 클릭
  const handleLogin = () => {
    // 임시
    open(<LoginForm />, 'center');
  };

  // 로그아웃 버튼 클릭
  const handleLogout = () => {
    signOut();
    setIsProfileDropdownVisible(false);
  };

  // 검색 아이콘 클릭 시 검색창 토글
  const handleSearchIconClick = () => setIsSearchVisible((prev) => !prev);

  // 프로필 버튼 클릭 시 드롭다운 토글
  const handleProfileBtnClick = () => {
    setIsProfileDropdownVisible((prev) => !prev);
  };

  // 알람 버튼 클릭 시 드롭다운 토글
  const handleNotificationClick = () => {
    setIsNotificationDropdownVisible((prev) => !prev);
  };

  const handleWriteClick = () => {
    if (data?.user) {
      router.push('/member/story');
      clearSelectedPost();
    } else {
      open(<LoginForm />, 'center');
    }
  };

  return (
    <header className={styles.header}>
      {/* 로고 */}
      <Link href="/" className={styles.logo} onClick={handleLogoClick}>
        <Image
          src={theme === 'dark' ? '/svgs/logo_dark.svg' : '/svgs/logo.svg'}
          alt="로고"
          fill
          style={{ objectFit: 'contain' }}
        />
      </Link>

      {/* 검색창 */}
      <div
        ref={searchWrapperRef}
        className={`${styles.searchWrapper} ${
          isSearchVisible ? styles.visible : ''
        }`}
      >
        <PostsSearchCont key={searchKey} navigateToHomeOnSearch={true} />
        {/* 검색창이 열려 있을 때 닫기 버튼 표시 */}
        {isSearchVisible && (
          <button
            className={styles.closeSearchBtn}
            onClick={handleSearchIconClick}
            aria-label="검색 닫기"
            type="button"
          >
            <Cross2Icon className={styles.btnLogo} />
          </button>
        )}
      </div>

      {/* 네비게이션 */}
      <nav
        className={`${styles.nav} ${
          isSearchVisible ? styles.hideOnMobile : ''
        }`}
      >
        {/* 검색 아이콘 버튼 (모바일에서 검색창 열기) */}
        <button
          className={styles.searchIconBtn}
          onClick={handleSearchIconClick}
          aria-label="검색 열기"
        >
          <MagnifyingGlassIcon className={styles.btnLogo} />
        </button>

        {/* 테마 변경 버튼 (임시) */}
        <button className={styles.themeBtn} onClick={toggleTheme}>
          {theme === 'dark' ? (
            <MoonIcon className={styles.btnLogo} />
          ) : (
            <SunIcon className={styles.btnLogo} />
          )}
        </button>

        {/* 글 작성 버튼 */}
        <button className={styles.writeBtn} onClick={handleWriteClick}>
          <Pencil1Icon className={styles.btnLogo} />
        </button>

        {/* 로그인/로그아웃 및 프로필 드롭다운 */}
        {!data ? (
          // 로그인 버튼
          <Button variants="purple" size="small" onClick={handleLogin}>
            로그인
          </Button>
        ) : (
          <>
            {/* 알림 버튼 */}
            <div
              className={styles.notificationDropdownWrapper}
              ref={notificationDropdownRef}
            >
              <button
                className={styles.alarmBtn}
                onClick={handleNotificationClick}
                aria-haspopup="true"
                aria-expanded={isNotificationDropdownVisible}
                type="button"
              >
                <BellIcon className={styles.btnLogo} />
                <span className={styles.alarmBadge} />
              </button>
              {isNotificationDropdownVisible && (
                <div className={styles.notificationDropdownMenu}>
                  <NotificationModalCont />
                </div>
              )}
            </div>
            {/* 프로필 드롭다운 */}
            <div className={styles.profileDropdownWrapper} ref={dropdownRef}>
              <button
                className={styles.profileBtn}
                onClick={handleProfileBtnClick}
                aria-haspopup="true"
                aria-expanded={isProfileDropdownVisible}
                type="button"
              >
                <Image
                  src={profileImg}
                  alt="프로필"
                  width={24}
                  height={24}
                  className={styles.profileImg}
                />
              </button>
              <button onClick={handleProfileBtnClick}>
                <ChevronDownIcon
                  className={`${styles.arrowIcon} ${
                    isProfileDropdownVisible ? styles.arrowIconOpen : ''
                  }`}
                  aria-hidden
                />
              </button>

              {/* 드롭다운 메뉴 */}
              {isProfileDropdownVisible && (
                <div className={styles.dropdownMenu}>
                  <Link
                    href={`/${username}/stories`}
                    className={styles.dropdownItem}
                    onClick={() => setIsProfileDropdownVisible(false)}
                  >
                    My Story
                  </Link>
                  <Link
                    href="/member/setting"
                    className={styles.dropdownItem}
                    onClick={() => setIsProfileDropdownVisible(false)}
                  >
                    설정페이지
                  </Link>
                  <div className={styles.dropdownDivider} />
                  <button
                    className={`${styles.dropdownItem} ${styles.logoutItem}`}
                    onClick={handleLogout}
                    type="button"
                  >
                    로그아웃
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
