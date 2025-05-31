import { AlarmRepository } from '@/back/alarm/domain/AlarmRepository';


export class PutAlarmCheckUsecase {
    constructor ( private readonly alarmRepository: AlarmRepository){}

    async execute( receiverId?: string, alarmId?: number ): Promise<boolean>{
        if(!receiverId) throw new Error("");
        

        if(alarmId){
            await this.alarmRepository.check(receiverId, alarmId);
        }else{
            await this.alarmRepository.checkAll(receiverId);
        }

        return true;
    }
}