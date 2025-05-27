import BodyTextPres from '../presentational/BodyTextPres';

const dummyPost = {
  id: 1,
  content: `
CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........  `,
  tags: [
    'tech',
    'code',
    'react',
    'javascript',
    'web development',
    'frontend',
    'programming',
    'development',
    'ui/ux',
    'design',
    'tutorial',
    'guide',
    'tips',
    'best practices',
    'performance',
    'accessibility',
    'responsive design',
    'testing',
    'optimization',
    'deployment',
  ],
};

export default function BodyTextCont() {
  const { content, tags } = dummyPost;

  return (
    <>
      <BodyTextPres body={content} tags={tags} />
    </>
  );
}
