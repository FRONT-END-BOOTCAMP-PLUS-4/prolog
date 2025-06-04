'use client';
// package
import { type JSX } from 'react';
// slice
import HeaderPres from '../presentational/HeaderPres';
import { useSession } from 'next-auth/react';

export default function CheckUserCont(): JSX.Element {
  // 유저 체크 로직
  const { data: session } = useSession();

  const username = session?.user?.name ?? '';
  const userProfile = session?.user.image ?? '/svgs/profile.svg';

  return <HeaderPres username={username} profileImg={userProfile} />;
}
