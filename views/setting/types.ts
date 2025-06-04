import { RefObject } from 'react';

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  introduction?: string | null;
  profileImg?: string | null;
  backgroundImg?: string | null;
};

export type SettingPresProps = {
  profile: UserProfile;
  name: string;
  nameError: string | null;
  introduction: string;
  profileImg: string | null;
  backgroundImg: string | null;
  loading: boolean;
  error: string | null;
  profileInputRef: RefObject<HTMLInputElement | null>;
  backgroundInputRef: RefObject<HTMLInputElement | null>;
  username: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onIntroductionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onProfileImgChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBackgroundImgChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveProfileImg: () => void;
  onRemoveBackgroundImg: () => void;
  onSave: (name: string) => void;
  onDeleteAccount: () => void;
  navigationBackHandler: () => void;
};
