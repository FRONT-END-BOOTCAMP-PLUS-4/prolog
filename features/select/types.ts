export type Option = {
  label: string;
  value: string;
};

export type SelectContProps = {
  options: Array<{ value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  storageKey?: string;
};

export type SelectPresProps = {
  options: Option[];
  value: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  onChange: (value: string) => void;
  className?: string;
};
