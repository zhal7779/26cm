import { atom } from 'recoil';

export const googleUserState = atom<string | null | void>({
  key: 'googleUserState',
  default: null,
});
