export type Option = {
  label: string;
  value: string;
};

export type SelectContProps = {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export type SelectPresProps = {
  options: Option[];
  value: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};
