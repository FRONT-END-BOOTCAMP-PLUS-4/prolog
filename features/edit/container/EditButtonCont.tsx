import EditButtonPres from '../presentational/EditButtonPres';

type Props = {
  onEdit: (id?: number) => void;
  id?: number;
};

export default function EditButtonCont({ onEdit, id }: Props) {
  return <EditButtonPres onEdit={() => onEdit(id)} />;
}
