import { Navigate } from 'react-router-dom'
import AccessDenied from '../pages/AccessDenied'
import { ROLE } from '../shared/interfaces/user.interface'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'

interface Props {
  component: React.ComponentType
  path?: string
  roles: Array<ROLE>
}

export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent, roles }) => {
  const { isAuthenticated, user } = useContext(AppContext);

	const userHasRequiredRole = user && roles.includes(user?.role) ? true : false

  if (isAuthenticated && userHasRequiredRole) {
    return <RouteComponent />
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <AccessDenied />
  }

  return <Navigate to="/login" />
}