export class GetAlarmListResponse {
    constructor(
        public id: number,
        public type: number,
        public postsId: number,
        public receiverId: string,
        public senderId: string,
    ){}
}