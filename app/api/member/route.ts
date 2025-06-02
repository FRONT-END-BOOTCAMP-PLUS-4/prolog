import { NextRequest, NextResponse } from 'next/server';
import { GetUserIdByNameUseCase } from '@/back/user/application/GetUserIdByNameUseCase';
import { PrUserRepository } from '@/back/user/infra/PrUserRepository';

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get('username');
  if (!username) {
    return NextResponse.json({ error: 'Missing username' }, { status: 400 });
  }

  const repo = new PrUserRepository();
  const useCase = new GetUserIdByNameUseCase(repo);

  try {
    const userId = await useCase.execute(username);

    if (!userId) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ id: userId });
  } catch (error) {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}

export async function POST() {}
export async function PUT() {}
export async function DELETE() {}
