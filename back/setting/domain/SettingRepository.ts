import {
  UpdateUserProfileDto,
  UserProfileResponseDto,
} from '../application/dto/SettingDto';

export interface SettingRepository {
  getUserProfile(userId: string): Promise<UserProfileResponseDto | null>;
  updateUserProfile(
    userId: string,
    data: UpdateUserProfileDto,
  ): Promise<UserProfileResponseDto>;
  deleteUser(userId: string): Promise<void>;
  softDeleteUser(userId: string): Promise<void>;
  findUserByName(name: string): Promise<UserProfileResponseDto | null>; // 추가
}
