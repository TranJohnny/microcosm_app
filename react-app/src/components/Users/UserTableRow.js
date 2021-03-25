import React from 'react';
import { useSelector } from 'react-redux';

const UserTableRow = ({ user }) => {
  const currentUser = useSelector((state) => state.user);

  const followUser = async () => {
    console.log(currentUser);
    const response = await fetch(`/api/users/${user.id}/followers`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(currentUser),
    });
    const res = await response.json();
    console.log('RESULT', res);
  };

  const unfollowUser = async () => {
    console.log(currentUser);
    const response = await fetch(`/api/users/${user.id}/followers`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
      body: JSON.stringify(currentUser),
    });
    const res = await response.json();
    console.log('RESULT', res);
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full rounded-full"
              src="https://source.unsplash.com/random"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {user.first_name} {user.last_name}
              {'  |  '}
              {user.username}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">Level {user.level}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {currentUser.followed.includes(user.username) ? (
          <button
            onClick={unfollowUser}
            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
          >
            <span
              aria-hidden
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Unfollow</span>
          </button>
        ) : (
          <button
            onClick={followUser}
            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
          >
            <span
              aria-hidden
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Follow</span>
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserTableRow;