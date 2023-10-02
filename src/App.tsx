import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';

import Home from './pages/app/Home';
import SignIn from './pages/auth/SignIn';
import AppLayout from './pages/layouts/AppLayout';

import { authService } from './services/auth';
import { loginAction } from './services/actions';
import { loginLoader, protectedLoader } from './services/loaders';

const router = createBrowserRouter([
  {
    id: 'root',
    path: "/",
    loader() {
      return { user: authService.user };
    },
    element: <SignIn />,
    Component: AppLayout,
    children: [
      {
        index: true,
        action: loginAction,
        loader: loginLoader,
        Component: SignIn,
      },
      {
        path: '/home',
        loader: protectedLoader,
        Component: Home,
      },
    ],
  },
  {
    path: '/sign-out',
    async action() {
      await authService.signOut();
      return redirect('/');
    },
  }
]);

const defaultTheme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>
    </ThemeProvider>
  );
}

export default App;
