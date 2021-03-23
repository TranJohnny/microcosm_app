import React, { useState, useEffect } from 'react';

function StoryCard({ story, loaded }) {
  if (!story) {
    return (
      <div className="max-w-lg bg-white shadow-md rounded-lg my-4 mx-4">
        <div className="py-4 px-8 mt-3">
          <div className="flex flex-col mb-4">
            <h2 className="text-gray-700 font-semibold text-2xl tracking-wide mb-">
              Welcome to Microcosm!
            </h2>
          </div>
          <div className="bg-gray-100 rounded-lg">
            <div className="py-4 px-4">
              <div className="flex flex-col">
                <div className="flex flex-col text-sm text-gray-500">
                  <span className="mb-1">
                    It looks like you don't have access to any stories... yet! Try following users
                    that have created content, or upgrade your subscription tier to view their
                    locked content.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4">
            <a
              href={`/users`}
              className="block tracking-widest uppercase text-center shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
            >
              Explore Users
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (!loaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="max-w-lg bg-white shadow-md rounded-lg my-4 mx-4">
        <div className="py-4 px-8 mt-3">
          <div className="flex flex-col mb-4">
            <h2 className="text-gray-700 font-semibold text-2xl tracking-wide mb-">
              {story.title}
            </h2>
            <h4 className="mb-1">By {story.story.users.username}</h4>
            <p className="text-gray-500 text-base">From the Story: {story.story.title}</p>
          </div>
          <div className="bg-gray-100 rounded-lg">
            <div className="py-4 px-4">
              <div className="flex flex-col">
                <h5 className="text-lg font-semibold mb-3">
                  Part {story.part} of {story.story.parts}
                </h5>
                <div className="flex flex-col text-sm text-gray-500">
                  <span className="mb-1">Posted {story.created_at} </span>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4">
            <a
              href={`/stories/${story.story.id}/part/${story.part}`}
              className="block tracking-widest uppercase text-center shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
            >
              Read {story.story.title}
              {story.story.parts > 1 ? `: Part ${story.part}` : ''}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default StoryCard;
