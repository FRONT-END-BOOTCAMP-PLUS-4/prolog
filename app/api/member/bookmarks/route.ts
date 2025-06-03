import { auth } from '@/app/(auth)/auth';
import { BookmarkUsecase } from '@/back/bookmark/application/usecase/BookmarkUsecase';
import { PrBookmarkRepository } from '@/back/bookmark/infra/PrBookmarkRepository';

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return new Response('Unauthorized', { status: 401 });

  const { postId, bookmarked } = await req.json();
  const userId = session.user.id;
  if (typeof userId !== 'string') {
    return new Response('Unauthorized', { status: 401 });
  }

  const repository = new PrBookmarkRepository();
  const usecase = new BookmarkUsecase(repository);

  try {
    await usecase.execute({ postId, userId, bookmarked });
    return Response.json({ bookmarked }); // 있어야 함!
  } catch (error) {
    return new Response('Failed to toggle bookmark', { status: 500 });
  }
}
