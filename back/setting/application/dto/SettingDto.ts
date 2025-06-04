export class UpdateUserProfileDto {
  constructor(
    public name?: string,
    public introduction?: string,
    public profileImg?: string | null,
    public backgroundImg?: string | null,
  ) {}
}

export class UserProfileResponseDto {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public profileImg: string | null,
    public introduction: string | null,
    public backgroundImg: string | null,
    public provider: string,
    public createdAt: Date,
  ) {}
}

export class DeleteUserAccountDto {
  constructor(public userId: string) {}
}

export class UploadImageDto {
  constructor(
    public file: File,
    public type: 'profile' | 'background',
  ) {}
}

export class UploadImageResponseDto {
  constructor(public imageUrl: string) {}
}
