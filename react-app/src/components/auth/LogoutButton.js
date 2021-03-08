import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../services/auth';
import { logoutUser } from '../../store/user';

const LogoutButton = ({ setAuthenticated }) => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    dispatch(logoutUser());
  };

  return (
    <button
      className="text-indigo font-bold inline-block py-2 px-4 rounded-2xl border-2 border-red-500 hover:text-red-500 mr-6"
      onClick={onLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
