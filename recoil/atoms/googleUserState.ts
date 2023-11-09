import { atom } from 'recoil';

export const googleUserState = atom<string | null>({
  key: 'googleUserState',
  default: null,
});
