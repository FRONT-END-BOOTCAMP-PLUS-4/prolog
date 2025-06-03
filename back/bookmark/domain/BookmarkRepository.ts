import { BookmarkDto } from '../application/dto/BookmarkDto';

export interface BookmarkRepository {
  toggleBookmark(dto: BookmarkDto): Promise<void>;
}
