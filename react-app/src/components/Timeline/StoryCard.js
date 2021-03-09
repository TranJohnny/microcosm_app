import React, { useState, useEffect } from 'react';

function StoryCard({ story, loaded }) {
  if (!story) {
    return (
      <div class="max-w-lg bg-white shadow-md rounded-lg my-4 mx-auto">
        <div class="py-4 px-8 mt-3">
          <div class="flex flex-col mb-4">
            <h2 class="text-gray-700 font-semibold text-2xl tracking-wide mb-">
              Welcome to Microcosm!
            </h2>
          </div>
          <div class="bg-gray-100 rounded-lg">
            <div class="py-4 px-4">
              <div class="flex flex-col">
                <div class="flex flex-col text-sm text-gray-500">
                  <span class="mb-1">
                    It looks like you don't have access to any stories... yet! Try following users
                    that have created content, or upgrade your subscription tier to view their
                    locked content.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="py-4">
            <a
              href={`/users`}
              class="block tracking-widest uppercase text-center shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
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
      <div class="max-w-lg bg-white shadow-md rounded-lg my-4 mx-auto">
        <div class="py-4 px-8 mt-3">
          <div class="flex flex-col mb-4">
            <h2 class="text-gray-700 font-semibold text-2xl tracking-wide mb-">{story.title}</h2>
            <h4 class="mb-1">By {story.story.users.username}</h4>
            <p class="text-gray-500 text-base">From the Story: {story.story.title}</p>
          </div>
          <div class="bg-gray-100 rounded-lg">
            <div class="py-4 px-4">
              <div class="flex flex-col">
                <h5 class="text-lg font-semibold mb-3">
                  Part {story.part} of {story.story.parts}
                </h5>
                <div class="flex flex-col text-sm text-gray-500">
                  <span class="mb-1">Posted {story.created_at} </span>
                </div>
              </div>
            </div>
          </div>
          <div class="py-4">
            <a
              href={`/stories/${story.id}/part/${story.part}`}
              class="block tracking-widest uppercase text-center shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
            >
              Read Story
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default StoryCard;
