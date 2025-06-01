import localFont from 'next/font/local';

import './global.scss';
import styles from './styles/layout.module.scss';
import Providers from './(auth)/providers';

import Header from '@/app/header';
import ApplyTheme from '@/shared/ApplyTheme';
import { auth } from '@/app/(auth)/auth';
import Modal from '@/shared/ui/modal';
import { getMetadata } from '@/shared/utils/metadata';
import { SearchProvider } from '@/shared/contexts/SearchContext';

const pretendard = localFont({
  src: '../public/fonts/pretendard-medium.woff2',
});

export const generateMetadata = () => {
  return getMetadata();
};

// export const metadata: Metadata = {
//   title: 'prolog',
//   description: '/',
//   icons: {
//     icon: '/',
//   },
// };

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
          <ApplyTheme />
          <SearchProvider>
            <div className={styles.layout}>
              <div className={styles.layout__header}>
                <Header />
              </div>
              <main className={styles.layout__main}>{children}</main>
            </div>
            <Modal />
          </SearchProvider>
        </Providers>
      </body>
    </html>
  );
}
