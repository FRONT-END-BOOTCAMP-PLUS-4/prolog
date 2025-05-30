'use client';

// package
import { useState, useRef, type JSX, useEffect } from 'react'; // useEffect를 임포트합니다.
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

// slice
import styles from '../styles/HeaderPres.module.scss';

// layer
import useOnClickOutside from '@/shared/hooks/useOnClickOutside';
import PostsSearchCont from '@/features/search-input';
import Button from '@/shared/ui/button';
import { useModalStore } from '@/shared/stores/useModalStore';
import { LoginForm } from '@/widgets/login';
import { useThemeStore } from '@/shared/stores/useThemeStore';
import { NotificationModalCont } from '@/widgets/notification';

export default function HeaderPres(): JSX.Element {
  const { open } = useModalStore((state) => state.action);
  // 로그인 여부
  const [isLoggedIn, setIsLoggedIn] = useState(true); // 테스트용
  // 검색창 표시 여부
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  // 프로필 드롭다운 표시 여부
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] =
    useState(false);

  const { theme, toggleTheme } = useThemeStore();

  const [isNotificationDropdownVisible, setIsNotificationDropdownVisible] =
    useState(false);

  // 드롭다운, 검색창 영역 ref
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchWrapperRef = useRef<HTMLDivElement>(null);

  const notificationDropdownRef = useRef<HTMLDivElement>(null);

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
    setIsLoggedIn(true);
  };

  // 로그아웃 버튼 클릭
  const handleLogout = () => {
    setIsLoggedIn(false);
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

  return (
    <header className={styles.header}>
      {/* 로고 */}
      <Link href="/" className={styles.logo}>
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
        <PostsSearchCont />
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
        <button className={styles.writeBtn}>
          <Link href="/member/story">
            <Pencil1Icon className={styles.btnLogo} />
          </Link>
        </button>

        {/* 로그인/로그아웃 및 프로필 드롭다운 */}
        {!isLoggedIn ? (
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
                  src="/svgs/profile.svg"
                  alt="프로필"
                  width={24}
                  height={24}
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
                    href="/email/stories"
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
