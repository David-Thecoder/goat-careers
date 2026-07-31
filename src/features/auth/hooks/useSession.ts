import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

export function useSession() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error('useSession must be used within AuthProvider');
  return auth;
}

