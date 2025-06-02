import { AiRepository } from '../../domain/AiRepository';
import { AiSummary } from '../../domain/entities/AiSummary';

export class CreateAiSummary {
  constructor(private readonly aiRepository: AiRepository) {}

  async execute(content: string): Promise<AiSummary[]> {
    const response = await this.aiRepository.createSummary(content);

    return response;
  }
}
