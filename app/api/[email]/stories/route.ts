import { NextRequest, NextResponse } from 'next/server';
import { PrProfileRepository } from '@/back/story/profile/infra/PrProfileRepository';
import { GetProfileUseCase } from '@/back/story/profile/application/usecase/GetProfileUsecase';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ email: string }> },
) {
  try {
    const { email } = await params;
    const repository = new PrProfileRepository();
    const usecase = new GetProfileUseCase(repository);
    const userProfile = await usecase.execute(email as string);
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
