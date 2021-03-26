import React from 'react';

function UserSideBar({ followed, user }) {
  return (
    <div className="bg-gray-50 my-4 py-4 px-4 rounded-lg shadow-md min-w-min divide-y">
      <h3 className="font-semibold">Welcome, {user.username}!</h3>
      <div className="relative pt-1 mb-3">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-900 bg-indigo-200">
              Level {user.level}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-indigo-600">
              {Math.floor(user.exp / 100)}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
          <div
            style={{ width: `${(user.exp / 100) * 100}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600 animate-pulse"
          ></div>
        </div>
        <p>Coins: {user.coins}</p>
      </div>
      <div>
        <p className="font-semibold my-1">Followed</p>
        {followed &&
          followed.map((user) => {
            return (
              <div className="w-full flex items-center flex-col my-1" key={user}>
                <div className="flex bg-white shadow-md p-4 rounded-md items-center">
                  <img
                    src="https://source.unsplash.com/random"
                    className="mr-2 h-10 w-10 rounded-full overflow-hidden relative"
                    alt="placeholder"
                  ></img>
                  <div className="mb-2 h-7 w-40 min-h-min overflow-hidden relative bg-indigo-600 rounded-md text-center align-center">
                    <span className="text-white">{user}</span>
                  </div>
                </div>
              </div>
            );
          })}
        {!followed && <p>Follow some users!</p>}
      </div>
    </div>
  );
}

export default UserSideBar;
