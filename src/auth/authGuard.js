import { getInstance } from './index';

export const authGuard = (to, from, next) => {
  const authService = getInstance();

  const fn = () => {
    // continue with route if authenticated
    if (authService.isAuthenticated) {
      return next();
    }
    
    // login if not authenticated
    authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
  };

  // if loading finished, check state of auth
  if (!authService.loading) {
    return fn();
  }

  // watch loading status for changes before checking auth state
  authService.$watch('loading', (loading) => {
    if (loading === false) {
      return fn();
    }
  });
};
