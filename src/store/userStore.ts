import { create } from 'zustand';

type TypeCards = {
	cardNumber: string;
	name: string;
	expiration: string;
	cvv: string;
};

type UserState = {
	username: string;
	ci: string;
	token: string;
	cards: TypeCards | null;
};

type UserAction = {
	updateUser: (user: UserState['username']) => void;
	updateCi: (ci: UserState['ci']) => void;
	updateToken: (token: UserState['token']) => void;
	updateCards: (card: UserState['cards']) => void;
};

type UserStore = UserState & { actions: UserAction };

const userStore = create<UserStore>()((set) => ({
	username: '',
	ci: '',
	token: '',
	cards: null,
	actions: {
		updateUser: (user) => set(() => ({ username: user })),
		updateCi: (ci) => set(() => ({ ci: ci })),
		updateToken: (token) => set(() => ({ token: token })),
		updateCards: (card) => set(() => ({ cards: card })),
	},
}));

export default userStore;
