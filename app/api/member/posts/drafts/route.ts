import { CreatePostDraftDto } from '@/back/posts/application/dto/CreatePostDraftDto';
import { UpdatePostDraftDto } from '@/back/posts/application/dto/UpdatePostDraftDto';
import { CreatePostDraftUsecase } from '@/back/posts/application/usecases/CreatePostDraftUsecase';
import { DeletePostDraftUsecase } from '@/back/posts/application/usecases/DeletePostDraftUsecase';
import { GetPostDraftListtUsecase } from '@/back/posts/application/usecases/GetPostDraftListUsecase';
import { UpdatePostDraftUsecase } from '@/back/posts/application/usecases/UpdatePostDraftUsecase';
import { PrPostDraftRepository } from '@/back/posts/infra/PrPostsDraftRepository';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    /** user_id 를 토큰으로 변경 할 예정 */
    const userId = 'uuid-1';

    const repository = new PrPostDraftRepository();
    const getPostDraftList = new GetPostDraftListtUsecase(repository);
    const draftList = await getPostDraftList.execute(userId);

    return NextResponse.json({ data: draftList });
  } catch (error) {
    console.error('임시 글 불러오기 오류:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const draftId = searchParams.get('draftId');

    if (!draftId) {
      return NextResponse.json(
        { message: 'draftId는 필수입니다.' },
        { status: 400 },
      );
    }

    const repository = new PrPostDraftRepository();
    const deletePostDraft = new DeletePostDraftUsecase(repository);

    const deletedId = await deletePostDraft.execute(Number(draftId));

    return NextResponse.json(deletedId, { status: 200 });
  } catch (error) {
    console.error('임시 저장글 삭제 실패:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: CreatePostDraftDto = await req.json();

    const { title, content } = body;

    if (!title || !content) {
      return NextResponse.json({
        message: '게시글 생성 중 오류가 발생했습니다.',
      });
    }
    /** user_id 를 토큰으로 변경 할 예정 */
    const userId = 'uuid-1';

    const draftWithUserId = {
      ...body,
      userId,
    };

    const repository = new PrPostDraftRepository();
    const getPostDraftList = new CreatePostDraftUsecase(repository);
    const newDraft = await getPostDraftList.execute(draftWithUserId);

    return NextResponse.json(newDraft, { status: 201 });
  } catch (error) {
    console.error('임시 저장글 삭제 실패:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body: UpdatePostDraftDto = await req.json();
    const { draftId, title, content } = body;

    if (!draftId || !title || !content) {
      return NextResponse.json(
        { message: 'id, title, content는 필수입니다.' },
        { status: 400 },
      );
    }

    const repository = new PrPostDraftRepository();
    const updatePostDraft = new UpdatePostDraftUsecase(repository);

    const updatedDraftId = await updatePostDraft.execute(body);

    return NextResponse.json(
      {
        message: '임시 글이 성공적으로 업데이트되었습니다.',
        id: updatedDraftId,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('임시 저장글 업데이트 실패:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
