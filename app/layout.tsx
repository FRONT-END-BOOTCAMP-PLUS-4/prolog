import type { Metadata } from "next";
import { Roboto, Open_Sans } from 'next/font/google';

import "./global.scss";
import styles from "./styles/layout.module.scss";

import Header from "@/widgets/header";


const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const openSans = Open_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "prolog",
  description: "/",
  icons: {
    icon: '/'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${roboto.className} ${openSans.className}`}>
        <div className={styles.layout}>
        <header className={styles.layout__header}>
          <Header/>
        </header>
        <main className={styles.layout__main}>
          {children}
        </main>
        </div>
      </body>
    </html>
  );
}
