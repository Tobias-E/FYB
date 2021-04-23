import { RecoilState } from 'recoil';
import { atom } from 'recoil';

export const inputStorage: RecoilState<string> = atom({
	key: 'userInput',
	default: '',
});
