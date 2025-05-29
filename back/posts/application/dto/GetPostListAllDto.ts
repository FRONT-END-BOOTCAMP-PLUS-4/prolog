export class GetPostListAllDto {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public tags: string[],
    public createdAt: string,
    public updatedAt: string,
    public userId: string,
    public name: string,
    public likes: number[],
    public notification: number[],
  ) {}
}
