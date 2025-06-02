import BodyTextPres from '../presentational/BodyTextPres';

type Props = {
  content: string;
  tags: string[];
};

export default function BodyTextCont({ content, tags }: Props) {
  return <BodyTextPres content={content} tags={tags} />;
}
