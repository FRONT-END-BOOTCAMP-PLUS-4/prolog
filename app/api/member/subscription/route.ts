import { NextRequest, NextResponse } from 'next/server';
// 쿼리문에서 제어 가능할수도? 화이팅입니다 !
export async function GET(request: NextRequest) {
  const useId = request.nextUrl.searchParams.get('id');
  console.log(useId);
}
export async function POST(request: NextRequest) {}
