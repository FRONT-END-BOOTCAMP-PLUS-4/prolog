export type User = {
  id: string;
  email: string;
  backgroundImg: string | null;
  profileImg: string | null;
  name: string;
  introduction: string | null;
};
export type Subscribe = {
  id: string;
  name: string;
  profileImg: string | null;
};

export type SubscribeUser = {
  users: Subscribe[];
  totalCount: number;
};
