import { GetAlarmListResponse } from '../dto/GetAlarmListDto'
import { AlarmRepository } from '@/back/alarm/domain/AlarmRepository';


export class GetAlarmListUsecase {
    constructor ( private readonly alarmRepository: AlarmRepository){}

    async execute( receiverId?: string ): Promise<GetAlarmListResponse[]>{
        if(!receiverId) throw new Error("");
        
        const alarmList = await this.alarmRepository.findAll(receiverId);


        return alarmList;
    }
}