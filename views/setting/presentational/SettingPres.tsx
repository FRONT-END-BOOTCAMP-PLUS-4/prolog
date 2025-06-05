// package
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';

// slice
import styles from '../styles/Setting.module.scss';
import { SettingPresProps } from '../types';

// layer
import Button from '@/shared/ui/button';

export default function SettingPres(props: SettingPresProps) {
  const {
    profile,
    name,
    nameError,
    introduction,
    profileImg,
    backgroundImg,
    loading,
    error,
    profileInputRef,
    backgroundInputRef,
    username,
    onNameChange,
    onIntroductionChange,
    onProfileImgChange,
    onBackgroundImgChange,
    onRemoveProfileImg,
    onRemoveBackgroundImg,
    onSave,
    onDeleteAccount,
    navigationBackHandler,
  } = props;
  return (
    <div className={styles.container}>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        closeOnClick
        pauseOnHover={false}
        draggable={false}
      />
      {/* {error && <div className={styles.errorMessage}>{error}</div>} */}
      <div
        className={`${styles.profileSection} ${backgroundImg ? styles.hasBackground : ''}`}
        style={
          backgroundImg
            ? ({
                '--bg-image': `url(${backgroundImg})`,
              } as React.CSSProperties)
            : {}
        }
      >
        <div className={styles.profileImageContainer}>
          <div className={styles.profilePlaceholder}>
            <Image
              src={profileImg || '/svgs/profile.svg'}
              alt="user profile image"
              width={80}
              height={80}
            />
          </div>
          <div className={styles.profileButtonGroup}>
            <input
              ref={profileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={onProfileImgChange}
              disabled={loading}
            />
            <Button
              variants="active"
              onClick={() => profileInputRef.current?.click()}
              disabled={loading}
            >
              프로필 업로드
            </Button>
            <Button onClick={onRemoveProfileImg} disabled={loading}>
              프로필 제거
            </Button>
          </div>
        </div>
        <div className={styles.userInfoContainer}>
          <p className={styles.email}>{profile.email}</p>
          <input
            value={name}
            onChange={onNameChange}
            className={styles.nickname}
            maxLength={20}
            disabled={loading}
            placeholder="닉네임 (최대 20자)"
          />
          {nameError && <div className={styles.errorMessage}>{nameError}</div>}
          <textarea
            placeholder="자기소개 내용을 작성해주세요. (최대 200자)"
            className={styles.bioTextarea}
            value={introduction}
            onChange={onIntroductionChange}
            maxLength={200}
            disabled={loading}
          />
        </div>
      </div>
      <div className={styles.settingsSection}>
        <div className={styles.settingItemContainer}>
          <div className={styles.settingItem}>
            <span className={styles.settingLabel}>배경 이미지</span>
            <div className={styles.settingControls}>
              <div className={styles.settingButtonGroup}>
                <input
                  ref={backgroundInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={onBackgroundImgChange}
                  disabled={loading}
                />

                <Button
                  onClick={() => backgroundInputRef.current?.click()}
                  disabled={loading}
                  style={{ border: 'none' }}
                >
                  업로드
                </Button>
                <Button
                  onClick={onRemoveBackgroundImg}
                  disabled={loading}
                  style={{ border: 'none', color: 'red' }}
                >
                  제거
                </Button>
              </div>
            </div>
          </div>
          <Button className={styles.settingDescription}>
            My Story의 배경 이미지를 설정합니다.
          </Button>
        </div>
        <div className={styles.settingItemContainer}>
          <div className={styles.settingItem}>
            <span className={styles.settingLabel}>회원 탈퇴</span>
            <div className={styles.settingControls}>
              <div className={styles.settingButtonGroup}>
                <Button
                  onClick={onDeleteAccount}
                  disabled={loading}
                  style={{ border: 'none', color: 'red' }}
                >
                  회원 탈퇴
                </Button>
              </div>
            </div>
          </div>
          <p className={styles.settingDescription}>
            탈퇴 시 작성하신 게시글 및 댓글은 모두 비공개 처리 됩니다.
          </p>
        </div>
      </div>
      <div className={styles.actionButtons}>
        <Button
          variants="purple"
          size="small"
          onClick={navigationBackHandler}
          disabled={loading}
        >
          취소
        </Button>
        <Button
          variants="active"
          size="small"
          onClick={() => onSave(name)}
          disabled={loading}
        >
          저장
        </Button>
      </div>
    </div>
  );
}
