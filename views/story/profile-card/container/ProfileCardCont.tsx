'use client';
//package
import { JSX, useEffect, useState } from 'react';
//slice
import ProfileCardPres from '../presentational/ProfileCardPres';
//type
import { SubscribeUser, User } from '../types';

export default function ProfileCardCont({
  username,
  userId,
}: { username: string; userId: string }): JSX.Element {
  const [userData, setUserData] = useState<User>();
  const [followList, setFollowList] = useState<SubscribeUser>();
  const [followerList, setFollowerList] = useState<SubscribeUser>();

  useEffect(() => {
    try {
      const getFollowingHandler = async () => {
        const response = await fetch(
          `/api/member/subscription/following?userId=${userId}`,
        );
        const data = await response.json();
        setFollowList(data);
      };
      const getFollowerHandler = async () => {
        const response = await fetch(
          `/api/member/subscription/follower?userId=${userId}`,
        );
        const data = await response.json();
        setFollowerList(data);
      };
      getFollowingHandler();
      getFollowerHandler();
    } catch (error) {}
  }, [userId, followList]);
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

  return (
    <ProfileCardPres
      followList={followList ?? ({} as SubscribeUser)}
      followerList={followerList ?? ({} as SubscribeUser)}
      userId={userId}
      userData={userData!}
    />
  );
}
