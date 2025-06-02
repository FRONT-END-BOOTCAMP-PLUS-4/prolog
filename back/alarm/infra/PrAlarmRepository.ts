import { AlarmRepository } from '@/back/alarm/domain/AlarmRepository';
import prisma from '@/shared/lib/prisma';
import { type findAllReturn } from '@/back/alarm/domain/AlarmRepository'

export class PrAlarmRepository implements AlarmRepository {
  async findAll(receiverId: string){
    const alarmList = await prisma.$queryRaw`
    SELECT
      n.id,
      n.type,
      n."posts_id" AS "postsId",
      n."sender_id" AS "senderId",
      n."check_status" AS "checkStatus",
      n."created_at" AS "createAt",
      LEFT(bp.title, 50) AS title,
      LEFT(bp.content, 50) AS content,
      su.name AS "senderName",
      su."profile_img" AS "senderProfileImg",
      c.content AS "comment_content"
    FROM "notification" n
    LEFT JOIN "blog_post" bp ON n."posts_id" = bp.id
    LEFT JOIN LATERAL (
      SELECT *
      FROM "comment"
      WHERE "posts_id" = n."posts_id"
      ORDER BY "created_at" DESC
      LIMIT 1
    ) c ON true
    LEFT JOIN "user" su ON n."sender_id" = su.id
    WHERE n."receiver_id" = ${receiverId};
  `;
    return alarmList as findAllReturn[];
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
