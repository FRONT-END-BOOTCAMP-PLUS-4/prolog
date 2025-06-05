'use client';

// package
import Image from 'next/image';

// slice
import styles from '../styles/LoginFormPres.module.scss';

// layer
import Button from '@/shared/ui/button';
import Logo from '@/shared/ui/logo';
import { signIn } from 'next-auth/react';
import { useThemeStore } from '@/shared/stores/useThemeStore';

export default function LoginFormPres() {
  const { theme } = useThemeStore();
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        {/* 로고 */}

        <Image
          src={theme === 'dark' ? '/svgs/logo_dark.svg' : '/svgs/logo.svg'}
          alt="로고"
          // fill
          width={180}
          height={180}
        />

        {/* 안내문구 */}
        <div className={styles.welcome}>Prolog에 오신것을 환영합니다.</div>
        <div className={styles.guide}>로그인 방식을 선택해주세요</div>
        {/* 버튼 영역 */}
        <div className={styles.btns}>
          <Button
            variants="theme"
            asChild
            onClick={() => signIn('github', { redirectTo: '/' })}
          >
            <div className={styles.btnInner}>
              <Image
                src="/svgs/github-mark.svg"
                alt="github"
                width={24}
                height={24}
              />
              <span>GitHub 로그인</span>
            </div>
          </Button>
          <Button asChild onClick={() => signIn('google', { redirectTo: '/' })}>
            <div className={styles.btnInner}>
              <Image
                src="/svgs/google.webp"
                alt="google"
                width={24}
                height={24}
              />
              <span>Google 로그인</span>
            </div>
          </Button>
        </div>
      </div>
      {/* 약관 안내 */}
      <div className={styles.terms}>
        귀하는 사용자 이용 약관에 동의하며 개인정보 보호 정책을 이해했음을
        인정합니다.
      </div>
    </div>
  );
}
