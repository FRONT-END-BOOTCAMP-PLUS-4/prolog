// package
import Image from 'next/image';
// slice
import styles from '../styles/LoginFormPres.module.scss';
// layer
import Button from '@/shared/ui/button';
import Logo from '@/shared/ui/logo';
import CleanIcon from '@/public/svgs/clean.svg';

export default function LoginFormPres() {
  return (
      <div className={styles.card}>
        <CleanIcon className={styles.cleanIcon} />
        <div className={styles.inner}>
          {/* 로고 */}
          <Logo />
          {/* <CleanIcon/> */}
          {/* <Image src={CleanIcon} alt="clear" width={24} height={24} /> */}
          {/* 안내문구 */}
          <div className={styles.welcome}>BLOG에 오신것을 환영합니다.</div>
          <div className={styles.guide}>로그인 방식을 선택해주세요</div>
          {/* 버튼 영역 */}
          <div className={styles.btns}>
            <Button variants="theme" asChild>
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
            <Button asChild>
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
          귀하는 사용자 이용 약관에 동의하며 개인정보 보호정책을 이해했음을
          인정합니다.
        </div>
      </div>
  );
}
