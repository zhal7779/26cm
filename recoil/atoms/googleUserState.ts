import { atom } from 'recoil';

export const googleUserState = atom<string>({
  key: 'googleUserState',
  default: '',
});
