'use client';

import { useRouter, usePathname } from 'next/navigation';

export function useNavigateToHomeWithParams() {
  const router = useRouter();
  const pathname = usePathname();

  function navigate(params: Record<string, string | string[] | undefined>) {
    const urlParams = new URLSearchParams();
    if (params.name) urlParams.append('name', params.name as string);
    if (params.tags && Array.isArray(params.tags)) {
      (params.tags as string[]).forEach((tag) => urlParams.append('tag', tag));
    }
    if (params.title) urlParams.append('title', params.title as string);
    if (params.content) urlParams.append('content', params.content as string);

    router.push('/?' + urlParams.toString());
  }

  return navigate;
}
