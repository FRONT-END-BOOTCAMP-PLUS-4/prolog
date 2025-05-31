import prisma from '@/shared/lib/prisma';
import { SendNotificationDto } from '../application/dto/SendNotificationDto';
import { NotificationRepository } from '../domain/NotificationRepository';

export class PrNotificationRepository implements NotificationRepository {
  async sendNotification(param: SendNotificationDto): Promise<void> {
    const { senderId, receiverId, postsId, type } = param;

    const data = receiverId.map((id) => ({
      senderId,
      receiverId: id,
      postsId,
      type,
    }));

    await prisma.notification.createMany({
      data,
    });
  }
}
