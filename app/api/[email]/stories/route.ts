import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { PrProfileRepository } from '@/back/story/profile/infra/PrProfileRepository';
import { GetProfileUseCase } from '@/back/story/profile/application/usecase/GetProfileUsecase';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ email: string }> },
) {
  try {
    const { email } = await params;
    //실제 데이터
    // const clientEmail = email;
    //임시데이터
    const clientEmail = 'mjhn010@naver.com';
    const repository = new PrProfileRepository();
    const usecase = new GetProfileUseCase(repository);
    const userProfile = await usecase.execute(clientEmail as string);
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
