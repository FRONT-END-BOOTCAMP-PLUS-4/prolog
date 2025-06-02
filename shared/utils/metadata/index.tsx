import { Metadata } from 'next';

import { META } from '@/shared/consts/metadata';

export type MetaDataType = {
  title: string;
  description?: string;
  ogImage?: string;
  asPath?: string;
};

export const getMetadata = (metaData?: MetaDataType) => {
  const { title, description, ogImage, asPath } = metaData || {};

  const TITLE = title ? `${title} | PROLOG` : META.title;
  const DESCRIPTION = description || META.description;
  const PAGE_URL = asPath || META.url;
  const OG_IMAGE = ogImage || META.ogImage;

  const metadata: Metadata = {
    metadataBase: new URL(META.url),
    alternates: {
      canonical: PAGE_URL,
    },
    title: TITLE,
    description: DESCRIPTION,
    icons: {
      icon: '/icons/prolog.webp',
    },
    keywords: [...META.keyword],
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: TITLE,
      locale: 'ko_KR',
      type: 'website',
      url: PAGE_URL,
      images: {
        url: OG_IMAGE,
      },
    },
    verification: {
      google: META.googleVerification,
      other: {
        'naver-site-verification': META.naverVerification,
      },
    },
  };

  return metadata;
};
