'use client';
import { JSX, useEffect, useState, useCallback, useRef } from 'react';
import ProfileCardPres from '../presentational/ProfileCardPres';
import { SubscribeUser, User } from '../types';

export default function ProfileCardCont({
  username,
  userId,
}: { username: string; userId: string }): JSX.Element {
  const [userData, setUserData] = useState<User>();
  const [followList, setFollowList] = useState<SubscribeUser>();
  const [followerList, setFollowerList] = useState<SubscribeUser>();
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const initialLoadComplete = useRef(false);

  // 팔로워 데이터를 다시 가져오는 함수
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
    const loadInitialData = async () => {
      try {
        // 모든 초기 데이터를 병렬로 가져오기
        const [followingResponse, followerResponse] = await Promise.all([
          fetch(`/api/member/subscription/following?userId=${userId}`),
          fetch(`/api/member/subscription/follower?userId=${userId}`),
        ]);

        const [followingData, followerData] = await Promise.all([
          followingResponse.json(),
          followerResponse.json(),
        ]);

        setFollowList(followingData);
        setFollowerList(followerData);
        initialLoadComplete.current = true;
        setIsInitialLoading(false);
      } catch (error) {
        console.error('초기 데이터 로딩 실패:', error);
        setIsInitialLoading(false);
      }
    };

    loadInitialData();
  }, [userId]);

  useEffect(() => {
    const getUserHandler = async () => {
      try {
        const response = await fetch(`/api/${username}/stories`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('사용자 데이터 가져오기 실패:', error);
      }
    };
    getUserHandler();
  }, [username]);

  // 팔로우 상태 변경 시 호출될 콜백 함수
  const onFollowStatusChange = useCallback(
    (isFollowing: boolean) => {
      if (!initialLoadComplete.current) return;

      // 즉시 UI 업데이트
      setFollowerList((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          totalCount: isFollowing ? prev.totalCount + 1 : prev.totalCount - 1,
        };
      });

      // 실제 데이터 다시 가져오기
      setTimeout(() => {
        if (initialLoadComplete.current) {
          refetchFollowerData();
        }
      }, 1000);
    },
    [refetchFollowerData],
  );

  // 로딩 중일 때는 로딩 상태 표시
  if (isInitialLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-24"></div>
      </div>
    );
  }

  return (
    <ProfileCardPres
      followList={followList ?? ({} as SubscribeUser)}
      followerList={followerList ?? ({} as SubscribeUser)}
      userId={userId}
      userData={userData!}
      onFollowStatusChange={onFollowStatusChange}
    />
  );
}
