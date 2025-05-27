import { LongCardPres } from '@/widgets/card';
import { CardData } from '@/widgets/card/types';
type dataProps = {
  data: CardData[];
};
export default function MyBlogCardListPres({ data }: dataProps) {
  return (
    <>
      {data.map((item) => (
        <LongCardPres key={item.id} data={item} />
      ))}
    </>
  );
}
