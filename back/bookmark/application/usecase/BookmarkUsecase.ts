import { BookmarkRepository } from '../../domain/BookmarkRepository';
import { BookmarkDto } from '../dto/BookmarkDto';

export class BookmarkUsecase {
  constructor(private readonly bookmarkRepository: BookmarkRepository) {}

  async execute(dto: BookmarkDto): Promise<void> {
    return this.bookmarkRepository.toggleBookmark(dto);
  }
}
