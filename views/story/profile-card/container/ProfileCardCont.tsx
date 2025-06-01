'use client';
//package
import { JSX, useEffect, useState } from 'react';
//slice
import ProfileCardPres from '../presentational/ProfileCardPres';
//type
import { User } from '../types';

export default function ProfileCardCont({
  username,
}: { username: string }): JSX.Element {
  const [userData, setUserData] = useState<User>();
  console.log(username);
  useEffect(() => {
    const getUserHandler = async () => {
      try {
        const response = await fetch(`/api/${username}/stories`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {}
    };
    getUserHandler();
  }, [username]);

  return <ProfileCardPres userData={userData!} />;
}
