import { configureStore } from '@reduxjs/toolkit';
import AuthReduser from '../slice/auth';

export default configureStore({
	reducer: {
		auth: AuthReduser,
	},
	devTools: import.meta.env.VITE_NODE_ENV !== 'production',
});
