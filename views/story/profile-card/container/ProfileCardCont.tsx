'use client';
//package
import { JSX, useEffect, useState } from 'react';
//slice
import ProfileCardPres from '../presentational/ProfileCardPres';
//type
import { User } from '../types';
import { useSession } from 'next-auth/react';

export default function ProfileCardCont(): JSX.Element {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    const getUserHandler = async () => {
      if (status === 'unauthenticated') {
        throw new Error('로그인이 필요합니다');
      }
      if (status === 'authenticated') {
        const { email } = session.user;
        try {
          const response = await fetch(`/api/member?email=${email}`);
          const data = await response.json();
          setUserData(data);
        } catch (error) {}
      }
    };
    getUserHandler();
  }, []);

  return <ProfileCardPres userData={userData!} />;
}
