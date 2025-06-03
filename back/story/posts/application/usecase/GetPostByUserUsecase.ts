import dayjs from 'dayjs';
import {
  GetPostByUserFilter,
  PostByUserRepository,
} from '../../domain/PostByUserRepository';
import { GetPostByUserResponseDto } from '../dto/GetPostByUserResponseDto';
import { stripMarkdown } from '@/shared/utils/stripmarkdown';
import { GetPostByUserDto } from '../dto/GetPostByUserDto';

export class GetPostByUserUsecase {
  constructor(private readonly postByUserRepository: PostByUserRepository) {}

  async execute(
    filters: GetPostByUserFilter,
    currentUserId: string,
  ): Promise<GetPostByUserResponseDto> {
    try {
      const {
        posts: postList,
        totalCount,
        likedPostIds,
      } = await this.postByUserRepository.findByUserId(filters, currentUserId);

      const page = filters.page ?? 1;
      const pageSize = filters.pageSize ?? 20;

      // DTO 매핑 (기존과 거의 동일, isPublic 추가)
      const data = postList.map((post) => {
        return new GetPostByUserDto(
          post.id,
          post.title,
          stripMarkdown(post.content),
          post.tags,
          dayjs(post.createdAt).format('YYYY-MM-DD'),
          post.updatedAt ? dayjs(post.updatedAt).format('YYYY-MM-DD') : '',
          post.userId,
          post.user.name,
          post.user.profileImg ?? '/svgs/profile.svg',
          post.thumbnailUrl ?? null,
          post._count.likes,
          post._count.comments,
          likedPostIds.includes(post.id),
          post.isPublic, // 공개/비공개 상태 포함
        );
      });

      const hasMore = (page - 1) * pageSize + data.length < totalCount;
      const timestamp = new Date().toISOString();

      return new GetPostByUserResponseDto(
        true,
        {
          targetUserId: filters.targetUserId,
          tags: filters.tags,
          title: filters.title,
          content: filters.content,
          sort: filters.sort,
          page,
          pageSize,
          isMyPage: filters.isMyPage ?? false,
        },
        data.length,
        data,
        hasMore,
        totalCount,
        timestamp,
      );
    } catch (error) {
      console.error('Error fetching user posts:', error);
      console.error('Error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        name: error instanceof Error ? error.name : undefined,
        filters,
        currentUserId,
        errorType: typeof error,
      });

      // 원본 에러도 함께 출력
      if (error instanceof Error) {
        console.error('Original error object:', error);
      }

      throw new Error(
        `Failed to fetch user posts: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  // 편의 메서드: 내 포스트 조회
  async getMyPosts(
    currentUserId: string,
    filters?: Omit<GetPostByUserFilter, 'targetUserId' | 'isMyPage'>,
  ): Promise<GetPostByUserResponseDto> {
    return this.execute(
      {
        ...filters,
        targetUserId: currentUserId,
        isMyPage: true,
      },
      currentUserId,
    );
  }

  // 편의 메서드: 다른 유저 포스트 조회
  async getUserPosts(
    targetUserId: string,
    currentUserId: string,
    filters?: Omit<GetPostByUserFilter, 'targetUserId' | 'isMyPage'>,
  ): Promise<GetPostByUserResponseDto> {
    return this.execute(
      {
        ...filters,
        targetUserId: targetUserId,
        isMyPage: false,
      },
      currentUserId,
    );
  }
}
