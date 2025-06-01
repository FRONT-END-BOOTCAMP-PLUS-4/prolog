'use client';
// package
import { type JSX } from 'react';
// slice
import HeaderPres from '../presentational/HeaderPres';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { error } from 'console';

export default function CheckUserCont(): JSX.Element {
  // 유저 체크 로직
  const { data: session, status } = useSession();
  console.log('email', session);

  const username = session?.user?.name ?? '';
  return <HeaderPres username={username} />;
}
