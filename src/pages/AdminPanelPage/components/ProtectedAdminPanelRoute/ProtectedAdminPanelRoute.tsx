import { observer } from 'mobx-react-lite';
import { PropsWithChildren } from 'react';
import RegistrationStore from '../../../../stores/RegistrationStore/RegistrationStore';
import { Navigate } from 'react-router';

export const ProtectedAdminPanelRoute = observer(
  ({ children }: PropsWithChildren) => {
    const { currentUserId } = RegistrationStore;
    // getCurrentUser();
    if (
      currentUserId &&
      currentUserId.length > 0 &&
      currentUserId !== 'aZ08EgqfHC'
    ) {
      return <Navigate to="/" replace />;
    }
    if (currentUserId?.length < 0) {
      <Navigate to="/login" replace />;
    }
    return children;
  },
);
