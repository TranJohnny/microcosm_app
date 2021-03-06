import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function User() {
  const [user, setUser] = useState({});
  const currentUser = useSelector((state) => state.user);
  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  const followUser = async () => {
    const response = await fetch(`/api/users/${userId}/followers`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(currentUser),
    });
    const res = await response.json();
  };

  return (
    <>
      <ul>
        <li>
          <strong>User Id</strong> {userId}
        </li>
        <li>
          <strong>Username</strong> {user.username}
        </li>
        <li>
          <strong>Email</strong> {user.email}
        </li>
        <li>
          <NavLink to={`/users/${userId}/subscriptions`} exact={true} activeClassName="active">
            Subscriptions
          </NavLink>
        </li>
      </ul>
      <button onClick={followUser}>Follow User</button>
    </>
  );
}
export default User;
