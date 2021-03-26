import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/Users/UsersList';
import User from './components/Users/User';
import Subscriptions from './components/Subscriptions';
import Timeline from './components/Timeline';
import Splash from './components/Splash';
import Story from './components/Story';
import Create from './components/Create';
import Footer from './components/Footer';
import { authenticate } from './services/auth';

import { saveUser } from './store/user';

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        dispatch(saveUser(user));
      }
      setLoaded(true);
    })();
  });

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        {authenticated && <NavBar setAuthenticated={setAuthenticated} />}
        <Switch>
          <Route path="/" exact={true}>
            <Splash authenticated={authenticated} />
          </Route>
          <Route path="/login" exact={true}>
            <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
          </Route>
          <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
            <User />
          </ProtectedRoute>
          <ProtectedRoute
            path="/users/:userId/subscriptions"
            exact={true}
            authenticated={authenticated}
          >
            <Subscriptions />
          </ProtectedRoute>
          <ProtectedRoute path="/home" exact={true} authenticated={authenticated}>
            <Timeline />
          </ProtectedRoute>
          <ProtectedRoute path="/stories/:storyId/part/:partNum" authenticated={authenticated}>
            <Story />
          </ProtectedRoute>
          <ProtectedRoute path="/create" authenticated={authenticated}>
            <Create />
          </ProtectedRoute>
        </Switch>
        {authenticated && <Footer />}
      </div>
    </BrowserRouter>
  );
}

export default App;
