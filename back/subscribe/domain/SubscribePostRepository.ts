export interface SubscribePostRepository {
  findFollowersByUserId(userId: string): Promise<string[]>;
}
