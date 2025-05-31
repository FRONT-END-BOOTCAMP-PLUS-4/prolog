import { AlarmRepository } from '@/back/alarm/domain/AlarmRepository';

export class DeleteAlarmUsecase {
  constructor(private readonly alarmRepository: AlarmRepository) {}

  async execute(alarmId: number[], receiverId?: string): Promise<boolean> {
    if (!receiverId) throw new Error('');

    await this.alarmRepository.deleteId(alarmId, receiverId);

    return true;
  }
}
