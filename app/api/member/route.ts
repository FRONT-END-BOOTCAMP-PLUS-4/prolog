import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { PrProfileRepository } from '@/back/story/profile/infra/PrProfileRepository';
import { GetProfileUseCase } from '@/back/story/profile/application/usecase/GetProfileUsecase';

export async function GET(request: NextRequest) {
  try {
    const clientEmail = request.nextUrl.searchParams.get('email');
    const userData = await getToken({
      req: request,
      secret: process.env.AUTH_SECRET,
    });

    if (!userData || clientEmail !== userData.email) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const { userId } = userData as { userId: string; email: string };
    const repository = new PrProfileRepository();
    const usecase = new GetProfileUseCase(repository);
    const userProfile = await usecase.execute(userId);
    return NextResponse.json(userProfile);
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 },
    );
  }
}

export async function POST() {}
export async function PUT() {}
export async function DELETE() {}
