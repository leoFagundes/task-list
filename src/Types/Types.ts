export type List = {
  _id?: string;
  author: string;
  title: string;
  message: string;
  isFavorite: boolean;
  status: string;
};

export type User = {
  _id?: string;
  username: string;
  password: string;
  profileImage?: string;
  lists: List[];
};

export type UserLogin = {
  username: string;
  password: string;
};
