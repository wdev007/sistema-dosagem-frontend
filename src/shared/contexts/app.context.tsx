import { createContext, useState } from 'react';
import authService from '../services/auth.service';
import { IUser } from '../interfaces/user.interface';
import { ISession } from '../interfaces/session.interface';
import { IAppContext } from '../interfaces/app.context.interface';

export const AppContext = createContext({} as IAppContext);

const AppProvider = ({ children }: any) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [user, setUser] = useState<IUser | null>(null);

	const signIn = async ({ email, password }: ISession): Promise<IUser | null> => {
		const { user: loggedInUser } = await authService.signIn({ email, password });
		setUser(loggedInUser);
		setIsAuthenticated(true);
		return loggedInUser;
	};

	const signOut = async () => {
		await authService.signOut();
		setUser(null);
		setIsAuthenticated(false);
	}

	const signUp = async ({ name, email, password, role }: IUser): Promise<IUser | null> => {
		const newUser = await authService.signUp({ name, email, password, role });
		return newUser;
	};

	const values = {
		user,
		isAuthenticated,
		signIn,
		signOut,
		signUp,
	}

	return (
		<AppContext.Provider value={values}>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;