import type { Metadata } from "next";
import "./global.scss";
import { Roboto, Open_Sans } from 'next/font/google';

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
        {children}
      </body>
    </html>
  );
}
