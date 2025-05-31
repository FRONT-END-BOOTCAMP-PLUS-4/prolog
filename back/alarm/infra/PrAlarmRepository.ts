import { AlarmRepository } from '@/back/alarm/domain/AlarmRepository';
import prisma from '@/shared/lib/prisma';

export class PrAlarmRepository implements AlarmRepository {
  async findAll(receiverId: string) {
    const alarmList = await prisma.notification.findMany({
      where: { receiverId: receiverId },
      select: {
        id: true,
        type: true,
        postsId: true,
        receiverId: true,
        senderId: true
      }
    });
    return alarmList;
  }
}
