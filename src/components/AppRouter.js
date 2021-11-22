import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { useAuth } from '../lib/firebase';
import dashboard from '../pages/dashboard';
import login from '../pages/login';
import profile from '../pages/profile';
import signup from '../pages/signup';

export default function AppRouter(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={dashboard} />
          <ProtectedRoute exact path="/login" component={login} />
          <ProtectedRoute exact path="/signup" component={signup} />
          <ProtectedRoute exact path="/profile" component={profile} />{' '}
        </Switch>
      </Router>
    </>
  );
}

function ProtectedRoute(props) {
  const { currentUser } = useAuth();
  const { path } = props;
  console.log('path', path);
  const location = useLocation();
  console.log('location state', location.state);

  if (path === '/login' || path === '/signup') {
    return currentUser ? (
      <Redirect to={location.state?.from ?? '/profile'} />
    ) : (
      <Route {...props} />
    );
  }
  return currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: path },
      }}
    />
  );
}
