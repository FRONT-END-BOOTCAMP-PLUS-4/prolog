import { auth } from '@/app/auth';
import Image from 'next/image';
import { signOut } from '@/app/auth';

async function logout() {
    'use server';
    await signOut();
}

export default async function Login() {
  const session = await auth();

  if (session?.user) {
    return (
      <form action={logout}>
        <p>{session?.user.name}</p>
        <p>{session?.user?.email}</p>
        <p>{session?.user?.provider}</p>
        {session?.user?.image && (
          <Image
            src={session?.user?.image}
            width={48}
            height={48}
            alt={session?.user?.name ?? 'image'}
          />
        )}
        {/* form형태로 사용하지 않고 onClick를 사용할시에는
        CSR컴포넌트로 분리해야 합니다. */}
        <button type='submit'>나가기</button>
      </form>
    );
  }

  return (
    <div>
      로그인 되어있지 않음
    </div>
  );
}
