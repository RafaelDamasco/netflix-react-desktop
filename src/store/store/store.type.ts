import { User } from 'store/user/user.type';

export type Store = {
  user: User
};

export type Action<Payload> = {
  type: string,
  payload: Payload
};
