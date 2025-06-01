import { NotificationRepository } from '../../domain/NotificationRepository';
import { SendNotificationDto } from '../dto/SendNotificationDto';

export class SendNotificationUsecase {
  constructor(
    private readonly sendNotificationRepository: NotificationRepository,
  ) {}

  async execute(param: SendNotificationDto): Promise<void> {
    await this.sendNotificationRepository.sendNotification(param);
  }
}
