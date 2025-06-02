import { GetPostListAllDto } from './GetPostListAllDto';

export class GetPostListAllResponseDto {
  constructor(
    public success: boolean,
    public filters: {
      name?: string;
      tags?: string[];
      title?: string;
      content?: string;
      page: number;
      pageSize: number;
      sort?: 'latest' | 'popular';
    },
    public count: number,
    public data: GetPostListAllDto[],
    public hasMore: boolean,
    public totalCount: number,
    public timestamp: string,
  ) {}
}
