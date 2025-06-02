import { UserRepository } from '../domain/UserRepository';

export class GetUserIdByNameUseCase {
  constructor(private readonly repo: UserRepository) {}

  async execute(username: string): Promise<string | null> {
    return this.repo.getUserIdByName(username);
  }
}
