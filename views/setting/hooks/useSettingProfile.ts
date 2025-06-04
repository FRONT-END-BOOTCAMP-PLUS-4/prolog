// app/member/setting/hooks/useSettingProfile.ts

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { signOut, useSession } from 'next-auth/react';
import {
  fetchUserProfile,
  updateUserProfile,
  uploadImage,
  deleteUserAccount,
} from '../utils/SettingApi';
import { validateNickname } from '../utils/validateNickname';
import { UserProfile } from '../types';

export function useSettingProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState<string | null>(null);
  const [introduction, setIntroduction] = useState<string>('');
  const [profileImg, setProfileImg] = useState<string | null>(null);
  const [backgroundImg, setBackgroundImg] = useState<string | null>(null);

  const [profileImgFile, setProfileImgFile] = useState<File | null>(null);
  const [backgroundImgFile, setBackgroundImgFile] = useState<File | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const profileInputRef = useRef<HTMLInputElement>(null);
  const backgroundInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const { update } = useSession();

  useEffect(() => {
    fetchUserProfile().then((data) => {
      setProfile(data);
      setName(data.name);
      setIntroduction(data.introduction || '');
      setProfileImg(data.profileImg);
      setBackgroundImg(data.backgroundImg);
    });
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setNameError(validateNickname(value));
  };

  const handleIntroductionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setIntroduction(e.target.value);
  };

  const handleProfileImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setProfileImgFile(e.target.files[0]);
      setProfileImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleBackgroundImgChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.files?.[0]) {
      setBackgroundImgFile(e.target.files[0]);
      setBackgroundImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleRemoveProfileImg = () => {
    setProfileImgFile(null);
    setProfileImg(null);
  };

  const handleRemoveBackgroundImg = () => {
    setBackgroundImgFile(null);
    setBackgroundImg(null);
  };


  const handleSave = async (username: string) => {

    setLoading(true);
    setError(null);

    try {
      const nicknameError = validateNickname(name);
      setNameError(nicknameError);
      if (nicknameError) throw new Error(nicknameError);

      let profileImgUrl = profileImg;
      let backgroundImgUrl = backgroundImg;

      if (profileImgFile) {
        profileImgUrl = await uploadImage(profileImgFile);
      }
      if (backgroundImgFile) {
        backgroundImgUrl = await uploadImage(backgroundImgFile);
      }

      const updated = await updateUserProfile({
        name,
        introduction,
        profileImg: profileImgUrl,
        backgroundImg: backgroundImgUrl,
      });
      setProfile(updated);

      toast.success('저장되었습니다!');
      setTimeout(() => {
        router.push(`/${username}/stories`);

      }, 1200);

      setProfileImgFile(null);
      setBackgroundImgFile(null);
      update({ name: name });
    } catch (e: unknown) {
      let message = '저장에 실패했습니다.';
      if (e instanceof Error) {
        message = e.message;
      }
      if (message.includes('이미 사용 중인 닉네임입니다.')) {
        toast.error(message);
      } else {
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('정말 회원 탈퇴하시겠습니까?')) {
      setLoading(true);
      setError(null);
      try {
        await deleteUserAccount();
        toast.error('탈퇴 되었습니다.');

        await signOut({ redirect: false });
        setTimeout(() => {
          router.push('/');
        }, 1200);
      } catch (e: unknown) {
        let message = '회원 탈퇴 실패';
        if (e instanceof Error) {
          message = e.message;
        }
        setError(message);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
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
  };
}
