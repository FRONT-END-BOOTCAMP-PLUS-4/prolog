'use client';

import dynamic from 'next/dynamic';

const PostFormPres = dynamic(
  () => import('../../../views/post-form/presentational/PostFormPres'),
  { ssr: false },
);

export default function Page() {
  return (
    <div>
      <PostFormPres />
    </div>
  );
}
