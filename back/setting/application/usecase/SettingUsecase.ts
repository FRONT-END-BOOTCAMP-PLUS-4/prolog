import fs from 'fs';
import path from 'path';
import dayjs from 'dayjs';
import {
  UpdateUserProfileDto,
  UserProfileResponseDto,
  UploadImageDto,
  UploadImageResponseDto,
} from '../dto/SettingDto';
import { SettingRepository } from '../../domain/SettingRepository';

export class SettingUseCase {
  constructor(private settingRepository: SettingRepository) {}

  async getUserProfile(userId: string): Promise<UserProfileResponseDto> {
    const user = await this.settingRepository.getUserProfile(userId);
    if (!user) throw new Error('사용자를 찾을 수 없습니다.');
    return user;
  }

  async updateUserProfile(
    userId: string,
    data: UpdateUserProfileDto,
  ): Promise<UserProfileResponseDto> {
    if (data.name) {
      this.validateNicknameFormat(data.name);
    }
    const existingUser = await this.settingRepository.getUserProfile(userId);
    if (!existingUser) throw new Error('사용자를 찾을 수 없습니다.');
    if (data.name && data.name !== existingUser.name) {
      await this.validateUniqueUsername(data.name);
    }
    return await this.settingRepository.updateUserProfile(userId, data);
  }

  private validateNicknameFormat(name: string): void {
    if (!/^[A-Za-z]+$/.test(name)) {
      throw new Error('닉네임은 영어 알파벳만 사용할 수 있습니다.');
    }
  }

  private async validateUniqueUsername(name: string): Promise<void> {
    const existingUser = await this.settingRepository.findUserByName(name);
    if (existingUser) {
      throw new Error('이미 사용 중인 닉네임입니다.');
    }
  }

  async uploadImage(
    uploadData: UploadImageDto,
  ): Promise<UploadImageResponseDto> {
    try {
      const arrayBuffer = await uploadData.file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const timestamp = dayjs().format('YYYYMMDD_HHmmss');
      const filename = `${timestamp}_${uploadData.type}_${uploadData.file.name.replace(/\s/g, '_')}`;
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');

      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const filepath = path.join(uploadDir, filename);
      fs.writeFileSync(filepath, buffer);

      return { imageUrl: `/uploads/${filename}` };
    } catch (error: unknown) {
      console.error('이미지 업로드 중 오류:', error);
      let message = '이미지 업로드 중 오류가 발생했습니다.';
      if (error instanceof Error) {
        message = error.message;
      }
      throw new Error(message);
    }
  }

  async removeProfileImage(userId: string): Promise<UserProfileResponseDto> {
    return await this.settingRepository.updateUserProfile(userId, {
      profileImg: null,
    });
  }

  async removeBackgroundImage(userId: string): Promise<UserProfileResponseDto> {
    return await this.settingRepository.updateUserProfile(userId, {
      backgroundImg: null,
    });
  }

  async deleteUserAccount(
    userId: string,
    deleteType: 'soft' | 'hard' = 'soft',
  ): Promise<void> {
    if (deleteType === 'soft') {
      await this.settingRepository.softDeleteUser(userId);
    } else {
      await this.settingRepository.deleteUser(userId);
    }
  }
}
