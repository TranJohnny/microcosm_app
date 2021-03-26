import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function User() {
  const [subscriptions, setSubscriptions] = useState({});
  const currentUser = useSelector((state) => state.user);
  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}/subscriptions`);
      const subscriptions = await response.json();
      setSubscriptions(subscriptions);
    })();
  }, []);

  if (!subscriptions) {
    return null;
  }

  return (
    <>
      <ul>
        {Object.values(subscriptions).map((subscription) => (
          <li>
            {subscription.id}
            <ul>
              <li>User: {subscription.username}</li>
              <li>Level: {subscription.level}</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
export default User;
