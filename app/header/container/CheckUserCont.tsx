'use client';
// package
import { useEffect, useState, type JSX } from 'react';
// slice
import HeaderPres from '../presentational/HeaderPres';
import { useSession } from 'next-auth/react';

export default function CheckUserCont(): JSX.Element {
  // 유저 체크 로직
  const { data: session } = useSession();

  const [profileImg, setProfileImg] = useState<string | null>(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await fetch(`/api/${session?.user.name}/stories`);

      if (!response.ok) {
        throw new Error('유저 정보 불러오기 실패');
      }

      const result = await response.json();

      setProfileImg(result.profileImg);
    };

    getUserInfo();
  }, [session]);

  const username = session?.user?.name ?? '';
  return <HeaderPres username={username} profileImg={profileImg} />;
}
