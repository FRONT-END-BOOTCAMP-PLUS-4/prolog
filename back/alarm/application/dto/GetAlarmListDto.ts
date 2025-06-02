export class GetAlarmListResponse {
    constructor(
        public id: number,
        public type: number,
        public postsId: number,
        public senderId: string,
        public checkStatus: number,
        public createAt: string,
        public title: string,
        public content: string,
        public senderName: string,
        public senderProfileImg: string | null,
    ){}
}