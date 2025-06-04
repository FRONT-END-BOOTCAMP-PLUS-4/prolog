'use client';

import SettingPres from '../presentational/SettingPres';
import { useSettingProfile } from '../hooks/useSettingProfile';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function SettingCont() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const username = session?.user.name;
  const navigationBackHandler = () => {
    router.back();
  };
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
    handleNameChange,
    handleIntroductionChange,
    handleProfileImgChange,
    handleBackgroundImgChange,
    handleRemoveProfileImg,
    handleRemoveBackgroundImg,
    handleSave,
    handleDeleteAccount,
  } = useSettingProfile();

  if (!profile) return <div>로딩중...</div>;

  return (
    <SettingPres
      profile={profile}
      name={name}
      nameError={nameError}
      introduction={introduction}
      profileImg={profileImg}
      backgroundImg={backgroundImg}
      loading={loading}
      error={error}
      profileInputRef={profileInputRef}
      backgroundInputRef={backgroundInputRef}
      username={username as string}
      onNameChange={handleNameChange}
      onIntroductionChange={handleIntroductionChange}
      onProfileImgChange={handleProfileImgChange}
      onBackgroundImgChange={handleBackgroundImgChange}
      onRemoveProfileImg={handleRemoveProfileImg}
      onRemoveBackgroundImg={handleRemoveBackgroundImg}
      onSave={handleSave}
      onDeleteAccount={handleDeleteAccount}
      navigationBackHandler={navigationBackHandler}
    />
  );
}
