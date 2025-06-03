'use client';
import { JSX, useEffect, useState, useCallback } from 'react';
import ProfileCardPres from '../presentational/ProfileCardPres';
import { SubscribeUser, User } from '../types';

export default function ProfileCardCont({
  username,
  userId,
}: { username: string; userId: string }): JSX.Element {
  const [userData, setUserData] = useState<User>();
  const [followList, setFollowList] = useState<SubscribeUser>();
  const [followerList, setFollowerList] = useState<SubscribeUser>();
  const [isLoading, setIsLoading] = useState(true);

  const refetchFollowerData = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/member/subscription/follower?userId=${userId}`,
      );
      const data = await response.json();
      setFollowerList(data);
    } catch (error) {
      console.error('팔로워 데이터 가져오기 실패:', error);
    }
  }, [userId]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [followingRes, followerRes, userRes] = await Promise.all([
          fetch(`/api/member/subscription/following?userId=${userId}`),
          fetch(`/api/member/subscription/follower?userId=${userId}`),
          fetch(`/api/${username}/stories`),
        ]);

        const [followingData, followerData, userData] = await Promise.all([
          followingRes.json(),
          followerRes.json(),
          userRes.json(),
        ]);

        setFollowList(followingData);
        setFollowerList(followerData);
        setUserData(userData);
      } catch (error) {
        console.error('데이터 로딩 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [userId, username]);

  const onFollowStatusChange = useCallback(
    (isFollowing: boolean) => {
      if (isLoading) return; // 로딩 중이면 업데이트 안함

      setFollowerList((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          totalCount: isFollowing ? prev.totalCount + 1 : prev.totalCount - 1,
        };
      });

      setTimeout(() => {
        refetchFollowerData();
      }, 1000);
    },
    [refetchFollowerData, isLoading],
  );

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-32 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-20 mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-24 mb-3"></div>
          <div className="h-8 bg-gray-200 rounded w-20"></div>
        </div>
      </div>
    );
  }

  return (
    <ProfileCardPres
      followList={followList!}
      followerList={followerList!}
      userId={userId}
      userData={userData!}
      onFollowStatusChange={onFollowStatusChange}
    />
  );
}
