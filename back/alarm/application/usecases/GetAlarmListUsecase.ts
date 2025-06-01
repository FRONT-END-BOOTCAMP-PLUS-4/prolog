import dayjs from 'dayjs';
import { GetAlarmListResponse } from '../dto/GetAlarmListDto';
import { AlarmRepository } from '@/back/alarm/domain/AlarmRepository';
import { stripMarkdown } from '@/shared/utils/stripmarkdown'

export class GetAlarmListUsecase {
  constructor(private readonly alarmRepository: AlarmRepository) {}

  async execute(receiverId?: string): Promise<GetAlarmListResponse[]> {
    if (!receiverId) throw new Error('');

    const alarmList = await this.alarmRepository.findAll(receiverId);
    const mapper = alarmList.map(alarm => ({
        id: alarm.id,
        type: alarm.type,
        postsId: alarm.postsId,
        senderId: alarm.senderId,
        checkStatus: alarm.checkStatus,
        createAt: dayjs(alarm.createAt).format('YYYY-MM-DD'),
        title: alarm.title,
        content: alarm.type === 1 ? stripMarkdown(alarm.content) : alarm.comment_content as string,
        senderName: alarm.senderName,
        senderProfileImg: alarm.senderProfileImg,
      }));
      console.log("mapper:",mapper)

    return mapper;
  }
}
