export interface UserRepository {
  getUserIdByName(username: string): Promise<string | null>;
}
