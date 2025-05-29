import DeleteButtonPres from '../presentational/DeleteButtonPres';

type Props = {
  onDelete: (id?: number) => void;
  id?: number;
};

export default function DeleteButtonCont({ onDelete, id }: Props) {
  const handleDelete = () => {
    onDelete(id);
  };

  return <DeleteButtonPres onDelete={handleDelete} />;
}
