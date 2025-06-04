import { PrSettingRepository } from './PrSettingRepository';
import { SettingUseCase } from '@/back/setting/application/usecase/SettingUsecase';

let settingUseCase: SettingUseCase | null = null;

export function getSettingUseCase() {
  if (!settingUseCase) {
    const repo = new PrSettingRepository();
    settingUseCase = new SettingUseCase(repo);
  }
  return settingUseCase;
}
