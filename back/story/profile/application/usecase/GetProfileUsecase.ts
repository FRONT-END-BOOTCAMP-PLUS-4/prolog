import { ProfileRepository } from '../../domain/ProfileRepository';
import { GetProfileDto } from '../dto/GetProfileDto';

export class GetProfileUseCase {
  constructor(private profileRepository: ProfileRepository) {}
  async execute(userId: string): Promise<GetProfileDto> {
    try {
      const userData = await this.profileRepository.findById(userId);

      return {
        name: userData.name,
        email: userData.email,
        profileImg: userData.profileImg || null,
        introduction: userData.introduction || null,
        backgroundImg: userData.backgroundImg || null,
      };
    } catch (error) {
      console.error('Error userData');
      throw new Error('Failed to fetch');
    }
  }
}
