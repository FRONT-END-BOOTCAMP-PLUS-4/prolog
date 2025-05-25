'use client';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

export default function Login() {
  const { data, status } = useSession();
  /*
        status 값	        session 값	    상황 예시
        'loading'	        undefined	    초기 클라이언트 렌더링 직후
        'authenticated'	    세션 객체 존재	   로그인 상태
        'unauthenticated'	null	        로그아웃 상태
    */

  return (
    <div>
      <p>{data?.user.name}</p>
      <p>{data?.user?.email}</p>
      <p>{data?.user?.provider}</p>
      {data?.user?.image && (
        <Image
          src={data?.user?.image}
          width={48}
          height={48}
          alt={data?.user?.name ?? 'image'}
        />
      )}
      {/* form형태로 사용하지 않고 onClick를 사용할시에는
    CSR컴포넌트로 분리해야 합니다. */}
      <button onClick={() => signOut({ redirectTo: '/' })}>나가기</button>
    </div>
  );
}
