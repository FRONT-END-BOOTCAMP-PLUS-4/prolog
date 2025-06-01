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
        senderId: true,
      },
    });
    return alarmList;
  }

  async check(receiverId: string, alarmId: number) {
    await prisma.notification.updateMany({
      where: { id: alarmId, receiverId },
      data: { checkStatus: 1 },
    });
    return true;
  }

  async checkAll(receiverId: string) {
    await prisma.notification.updateMany({
      where: { receiverId: receiverId },
      data: { checkStatus: 1 },
    });
    return true;
  }

  async deleteId(alarmId: number[], receiverId: string) {
    await prisma.notification.deleteMany({
      where: { receiverId, id: { in: alarmId } },
    });

    return true;
  }
}
