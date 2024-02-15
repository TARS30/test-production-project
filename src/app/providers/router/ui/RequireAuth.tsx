import { UserRole, getUserAuthData, getUserRole } from 'entitiess/User';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
  children:JSX.Element,
  role?: UserRole[]
}

export function RequireAuth(props: RequireAuthProps) {
  const {
    children,
    role,
  } = props;

  const userRole = useSelector(getUserRole);

  const hasRequiredRole = useMemo(() => {
    if (!role) {
      return true;
    }

    return role.some((requiredRole) => {
      const hasRole = userRole?.includes(requiredRole);
      return hasRole;
    });
  }, [role, userRole]);

  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRole) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
  }

  return children;
}
