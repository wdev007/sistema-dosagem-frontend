import React, { createContext, useState } from 'react';
import { IAppContext } from '../interfaces/app.context.interface';
import { IUser } from '../interfaces/user.interface';
import { ISession } from '../interfaces/session.interface';
import authService from '../services/auth.service';

export const AppContext = createContext({} as IAppContext);

const AppProvider: React.FC = ({ children }: any) => {
	const [user, setUser] = useState<IUser | null>(null);

	// useEffect(() => {
	// }, []);

	const signIn = async ({ email, password }: ISession) => {
		await authService.signIn({ email, password });
		setUser(user);
		return user;
	};

	return (
		<AppContext.Provider
		value={{
			user,
			signIn
		}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;