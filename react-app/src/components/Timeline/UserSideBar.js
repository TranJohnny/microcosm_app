import React from 'react';

function UserSideBar({ followed }) {
  return (
    <div className="bg-gray-50 my-4 py-4 px-4 rounded-lg shadow-md">
      <p>User Sidebar</p>
      <p>Followed:</p>
      {followed &&
        followed.map((user) => {
          return <p>{user}</p>;
        })}
      {!followed && <p>Follow some users!</p>}
    </div>
  );
}

export default UserSideBar;
