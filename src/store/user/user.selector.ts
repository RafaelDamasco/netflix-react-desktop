import { Store } from 'store/store/store.type';

export const tokenSelector = (state: Store) => state.user.data.token;
