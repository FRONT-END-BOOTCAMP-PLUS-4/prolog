import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './global.scss';
import styles from './styles/layout.module.scss';

import Header from '@/app/header';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.className}`}>
      <body>
        <div className={styles.layout}>
          <div className={styles.layout__header}>
            <Header />
          </div>
          <main className={styles.layout__main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
