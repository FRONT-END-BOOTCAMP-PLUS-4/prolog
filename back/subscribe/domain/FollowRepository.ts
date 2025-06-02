import { Subscribe } from '@/app/generated/prisma';

export interface FollowRepository {
  findByRequestAndResponse(
    requestId: string,
    responseId: string,
  ): Promise<Subscribe | null>;
  deleteByRequestAndResponse(
    requestId: string,
    responseId: string,
  ): Promise<void>;
  create(requestId: string, responseId: string): Promise<Subscribe>;
  existsByRequestAndResponse(
    requestId: string,
    responseId: string,
  ): Promise<boolean>;
}
