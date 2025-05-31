import { Notification } from '@/app/generated/prisma';

export interface AlarmRepository {
  findAll(receiverId: string): Promise<Array<{id: number, type: number, postsId:number, receiverId: string, senderId:string}>>;
}
