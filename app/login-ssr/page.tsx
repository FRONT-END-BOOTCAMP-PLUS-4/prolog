import Image from 'next/image';
import { auth } from '@/app/(auth)/auth';
import { cookies } from 'next/headers';

async function getData() {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get('authjs.session-token');

    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'}/api/test`,{
      headers: {
        'Cookie': `authjs.session-token=${sessionToken?.value}`,
      },
    });
    return await res.json();
  } catch (error) {
    return null;
  }
}

export default async function Login() {
  const session = await auth();
  const dataFromApi = await getData();

  if (session?.user) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
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
          {session?.user?.provider}
        </p>
        <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>
          {session?.user.name}
        </p>
        <p style={{ fontSize: '20px', color: 'gray', marginBottom: '16px' }}>
          {session?.user?.email}
        </p>
        {session?.user?.image && (
          <Image
            style={{ borderRadius: '50%' }}
            src={session.user.image}
            width={48}
            height={48}
            alt={session.user.name ?? 'image'}
          />
        )}
        <div style={{ display: 'flex', gap: '4px' }}>
          <form action="/api/auth/signout" method="post">
            <input type="hidden" name="/" value="/" />
            <button
              type="submit"
              style={{
                padding: '4px 8px',
                borderRadius: '4px',
                backgroundColor: '#f0f0f0',
                color: '#333',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              로그아웃
            </button>
          </form>
        </div>
        {dataFromApi && <p>{dataFromApi}</p>}
      </div>
    );
  }

  return <div>로그인 되어있지 않음</div>;
}