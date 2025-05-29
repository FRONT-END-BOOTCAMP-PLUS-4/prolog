export class GetProfileDto {
  constructor(
    public name: string,
    public email: string,
    public backgroundImg: string | null,
    public profileImg: string | null,
    public introduction: string | null,
  ) {}
}
