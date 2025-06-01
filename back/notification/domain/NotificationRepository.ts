import { SendNotificationDto } from '../application/dto/SendNotificationDto';

export interface NotificationRepository {
  sendNotification(param: SendNotificationDto): Promise<void>;
}
