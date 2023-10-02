import { Navigate } from 'react-router-dom'
import AccessDenied from '../pages/AccessDenied'
import { ROLE } from '../shared/interfaces/user.interface'

interface Props {
  component: React.ComponentType
  path?: string
  roles: Array<ROLE>
}

export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent, roles }) => {
  const isAuthenticated = false;
	const user = null as any;

	const userHasRequiredRole = user && roles.includes(user?.role) ? true : false

  if (isAuthenticated && userHasRequiredRole) {
    return <RouteComponent />
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <AccessDenied />
  }

  return <Navigate to="/" />
}