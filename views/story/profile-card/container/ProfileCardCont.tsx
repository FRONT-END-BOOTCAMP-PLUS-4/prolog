'use client';
//package
import { JSX, useEffect, useState } from 'react';
//slice
import ProfileCardPres from '../presentational/ProfileCardPres';
//type
import { SubscribeUser, User } from '../types';
import { useSession } from 'next-auth/react';

export default function ProfileCardCont(): JSX.Element {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState<User>();
  const [followers, setFollowers] = useState<SubscribeUser>({
    users: [],
    totalCount: 0,
  });
  const [following, setFollowing] = useState<SubscribeUser>({
    users: [],
    totalCount: 0,
  });

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
  useEffect(() => {
    const subscribeHandler = async () => {
      if (status === 'authenticated') {
        const { id } = session.user;
        const response = await fetch(`/api/member/subscription?id=${id}`);
        const data = await response.json();
        setFollowers(data.followers);
        setFollowing(data.following);
      }
    };
    subscribeHandler();
  }, []);

  return (
    <ProfileCardPres
      followers={followers}
      following={following}
      userData={userData!}
    />
  );
}
