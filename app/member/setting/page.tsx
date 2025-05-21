import Image from 'next/image';
import styles from './Setting.module.scss';
import Button from '@/shared/ui/button';

export default function Page() {
  return (
    <div className={styles.container}>
      {/* 섹션 1 */}
      <div className={styles.profileSection}>
        {/* 프로필 이미지 및 업로드/제거 버튼 영역 */}
        <div className={styles.profileImageContainer}>
          <div className={styles.profilePlaceholder}>
            <Image
              src={'/svgs/profile.svg'}
              alt="user profile image"
              width={80}
              height={80}
            />
          </div>
          <div className={styles.profileButtonGroup}>
            <Button variants="active">프로필 업로드</Button>
            <Button>프로필 제거</Button>
          </div>
        </div>

        {/* 사용자 정보 영역 */}
        <div className={styles.userInfoContainer}>
          <p className={styles.email}>user@email.com</p>
          <input defaultValue={'userNickname'} className={styles.nickname} />
          <textarea
            placeholder="자기소개 내용을 작성해주세요"
            className={styles.bioTextarea}
          ></textarea>
        </div>
      </div>

      {/* 배경, 테마, 회원 탈퇴 설정 영역 */}
      <div className={styles.settingsSection}>
        {/* 배경 설정 */}
        <div className={styles.settingItemContainer}>
          <div className={styles.settingItem}>
            <span className={styles.settingLabel}>배경</span>
            <div className={styles.settingControls}>
              <div className={styles.settingButtonGroup}>
                <Button variants="active">업로드</Button>
                <Button>제거</Button>
              </div>
            </div>
          </div>
          <p className={styles.settingDescription}>
            블로그페이지의 배경 이미지를 설정합니다.
          </p>
        </div>

        {/* 배경 설정 */}
        <div className={styles.settingItemContainer}>
          <div className={styles.settingItem}>
            <span className={styles.settingLabel}>테마</span>
            <div className={styles.settingControls}>
              <div className={styles.settingButtonGroup}>
                <Button>밝은</Button>
                <Button variants="theme">어두운</Button>
              </div>
            </div>
          </div>
          <p className={styles.settingDescription}>
            서비스의 테마를 설정합니다.
          </p>
        </div>

        {/* 배경 설정 */}
        <div className={styles.settingItemContainer}>
          <div className={styles.settingItem}>
            <span className={styles.settingLabel}>회원 탈퇴</span>
            <div className={styles.settingControls}>
              <div className={styles.settingButtonGroup}>
                <Button variants="red">회원 탈퇴</Button>
              </div>
            </div>
          </div>
          <p className={styles.settingDescription}>
            탈퇴 시 작성하신 게시글 및 댓글은 모두 삭제되며 복구되지 않습니다.
          </p>
        </div>
      </div>

      {/* 저장/취소 버튼 영역 */}
      <div className={styles.actionButtons}>
        <Button variants="active" size="large">
          저장
        </Button>
        <Button size="large">취소</Button>
      </div>
    </div>
  );
}
