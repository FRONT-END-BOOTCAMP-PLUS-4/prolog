import { AiSummary } from './entities/AiSummary';

export interface AiRepository {
  createSummary(content: string): Promise<AiSummary[]>;
}
