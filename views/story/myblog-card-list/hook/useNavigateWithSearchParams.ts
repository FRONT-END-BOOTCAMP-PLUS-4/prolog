'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function useNavigateWithSearchParams() {
  const router = useRouter();
  const pathname = usePathname();
  const currentSearch = useSearchParams();
  const navigate = useCallback(
    (params: {
      name?: string;
      tags?: string[];
      title?: string;
      content?: string;
    }) => {
      const urlParams = new URLSearchParams();

      if (params.name) {
        urlParams.append('name', params.name);
      }
      if (params.tags && params.tags.length > 0) {
        params.tags.forEach((tag) => {
          urlParams.append('tag', tag);
        });
      }
      if (params.title) {
        urlParams.append('title', params.title);
      }
      if (params.content) {
        urlParams.append('content', params.content);
      }
      router.push(`${pathname}?${urlParams.toString()}`);
    },
    [pathname, router],
  );

  return navigate;
}
