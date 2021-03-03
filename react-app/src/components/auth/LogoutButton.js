import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../services/auth';
import logout_user from '../../store/user';

const LogoutButton = ({ setAuthenticated }) => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
