'use client';
//package
import { JSX, useEffect, useState } from 'react';
//slice
import ProfileCardPres from '../presentational/ProfileCardPres';
//type
import { User } from '../types';
import { usePathname } from 'next/navigation';

export default function ProfileCardCont(): JSX.Element {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const email = segments[0];
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    const getUserHandler = async () => {
      try {
        const response = await fetch(`/api/${email}/stories`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {}
    };
    getUserHandler();
  }, []);

  return <ProfileCardPres userData={userData!} />;
}
