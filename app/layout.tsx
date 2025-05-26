import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './global.scss';
import styles from './styles/layout.module.scss';
import Providers from './(auth)/providers';

import Header from '@/app/header';
import Modal from '@/shared/ui/modal';
import { auth } from '@/app/(auth)/auth';

const pretendard = localFont({
  src: '../public/fonts/pretendard-medium.woff2',
});

export const metadata: Metadata = {
  title: 'prolog',
  description: '/',
  icons: {
    icon: '/',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="ko" className={`${pretendard.className}`}>
      <body>
        <Providers session={session}>
          <div className={styles.layout}>
            <div className={styles.layout__header}>
              <Header />
            </div>
            <main className={styles.layout__main}>{children}</main>
          </div>
          <Modal />
        </Providers>
      </body>
    </html>
  );
}
