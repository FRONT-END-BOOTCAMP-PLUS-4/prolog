import { GetPostByUserDto } from './GetPostByUserDto';

export class GetPostByUserResponseDto {
  constructor(
    public success: boolean,
    public filters: {
      targetUserId: string;
      name?: string;
      tags?: string[];
      title?: string;
      content?: string;
      page: number;
      pageSize: number;
      sort?: 'latest' | 'popular' | 'bookMark';
      isMyPage: boolean;
    },
    public count: number,
    public data: GetPostByUserDto[],
    public hasMore: boolean,
    public totalCount: number,
    public timestamp: string,
  ) {}
}
