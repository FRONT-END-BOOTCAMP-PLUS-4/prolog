import NotificationItemPres from '../presentational/NotificationItemPres';
import { NotificationItemType } from '../types';

interface Props {
  item: NotificationItemType;
  deleteMode: boolean;
  selected: boolean;
  onToggleSelect: (id: string) => void;
}

export default function NotificationItemCont(props: Props) {
  return <NotificationItemPres {...props} />;
}
