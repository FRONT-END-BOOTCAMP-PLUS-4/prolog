export interface SubscribeRepository {
  findFollowersByUserId(userId: string): Promise<string[]>;
}
