import { UpdateCommentDto } from '@/back/comments/application/dto/UpdateCommentDto';
import { DeleteCommentUsecase } from '@/back/comments/application/usecases/DeleteCommentUsecase';
import { UpdateCommentUsecase } from '@/back/comments/application/usecases/UpdateCommentUsecase';
import { PrCommentRepository } from '@/back/comments/infra/PrCommentRepository';
import prisma from '@/shared/lib/prisma';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const userData = await getToken({ req, secret: process.env.AUTH_SECRET });
    if (!userData || !userData.sub) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { content } = await req.json();
    if (!content) {
      return NextResponse.json(
        { message: '내용을 입력하세요.' },
        { status: 400 },
      );
    }

    const updatedComment = await prisma.comment.update({
      where: { id: Number(params.id) },
      data: {
        content,
        updatedAt: new Date(),
      },
    });

    const usecase = new UpdateCommentUsecase(new PrCommentRepository());
    await usecase.execute(Number(params.id), userData.sub, content);

    return NextResponse.json(updatedComment, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: '댓글 수정 실패' }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const userData = await getToken({ req, secret: process.env.AUTH_SECRET });
    if (!userData || !userData.sub) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const usecase = new DeleteCommentUsecase(new PrCommentRepository());
    await usecase.execute(Number(id), userData.sub);

    return NextResponse.json(
      { message: '댓글이 삭제되었습니다.' },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: '댓글 삭제 실패' }, { status: 500 });
  }
}
