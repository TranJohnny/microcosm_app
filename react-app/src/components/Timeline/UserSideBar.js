import React from 'react';

function UserSideBar({ followed }) {
  return (
    <div className="bg-gray-50 my-4 py-4 px-4 rounded-lg">
      <p>User Sidebar</p>
      <p>Followed:</p>
      {followed.map((user) => {
        return <p>{user}</p>;
      })}
    </div>
  );
}

export default UserSideBar;
