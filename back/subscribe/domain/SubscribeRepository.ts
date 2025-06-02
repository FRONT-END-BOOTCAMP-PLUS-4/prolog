import { Subscribe } from '@/app/generated/prisma';

export interface UserInfo {
  id: string;
  name: string;
  profileImg: string | null;
}

export interface UsersResponse<T = UserInfo> {
  users: T[];
  totalCount: number;
}
export type FollowersResponse = UsersResponse<UserInfo>;
export type FollowingResponse = UsersResponse<UserInfo>;
export interface SubscriptionRepository {
  findFollowersByUserId(userId: string): Promise<FollowersResponse>;
  findFollowingByUserId(userId: string): Promise<FollowingResponse>;
  countBySubscription(whereClause: object): Promise<number>;
}
