'use client';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

export default function Login() {
  const { data, status } = useSession();
  const [temp, setTemp] = useState<string | null>(null);
  /*
        status 값	        session 값	    상황 예시
        'loading'	        undefined	    초기 클라이언트 렌더링 직후
        'authenticated'	    세션 객체 존재	   로그인 상태
        'unauthenticated'	null	        로그아웃 상태
    */

  const getData = () => {
    fetch('/api/test')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTemp(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (data?.user) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          gap: '4px',
        }}
      >
        <p
          style={{
            fontSize: '28px',
            color: 'gray',
            backgroundColor: '#f0f0f0',
            padding: '4px 8px',
            borderRadius: '4px',
          }}
        >
          {data?.user?.provider}
        </p>
        <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>
          {data?.user.name}
        </p>
        <p style={{ fontSize: '20px', color: 'gray', marginBottom: '16px' }}>
          {data?.user?.email}
        </p>
        {data?.user?.image && (
          <Image
            style={{ borderRadius: '50%' }}
            src={data?.user?.image}
            width={48}
            height={48}
            alt={data?.user?.name ?? 'image'}
          />
        )}
        <div style={{ display: 'flex', gap: '4px' }}>
          <button
            onClick={() => signOut({ redirectTo: '/' })}
            style={{
              padding: '4px 8px',
              borderRadius: '4px',
              backgroundColor: '#f0f0f0',
              color: '#333',
            }}
          >
            로그아웃
          </button>
          <button
            onClick={getData}
            style={{
              padding: '4px 8px',
              borderRadius: '4px',
              backgroundColor: '#f0f0f0',
              color: '#333',
            }}
          >
            데이터 가져오기
          </button>
        </div>
        {temp && <p>{temp}</p>}
      </div>
    );
  }

  return (
    <div>
      <div>로그인 되어있지 않음</div>
      <button
        onClick={getData}
        style={{
          padding: '4px 8px',
          borderRadius: '4px',
          backgroundColor: '#f0f0f0',
          color: '#333',
        }}
      >
        데이터 가져오기
      </button>
    </div>
  );
}
