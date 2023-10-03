import { createContext, useState } from 'react';
import authService from '../services/auth.service';
import { IUser } from '../interfaces/user.interface';
import { ISession } from '../interfaces/session.interface';
import { IAppContext } from '../interfaces/app.context.interface';

export const AppContext = createContext({} as IAppContext);

const AppProvider = ({ children }: any) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [user, setUser] = useState<IUser | null>(null);

	const signIn = async ({ email, password }: ISession) => {
		const newUser = await authService.signIn({ email, password });
		setUser(newUser);
		setIsAuthenticated(true);
		return newUser;
	};

	const signOut = async () => {
		await authService.signOut();
		setUser(null);
		setIsAuthenticated(false);
	}

	const values = {
		user,
		isAuthenticated,
		signIn,
		signOut
	}

	return (
		<AppContext.Provider value={values}>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;