import { observer } from 'mobx-react-lite';
import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';
import RegistrationStore from '../../../../stores/RegistrationStore/RegistrationStore';

export const ProtectedRoute = observer(({ children }: PropsWithChildren) => {
  const { currentUser, getCurrentUser } = RegistrationStore;
  getCurrentUser();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
});
