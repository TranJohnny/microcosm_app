import React, { useState, useEffect } from 'react';

function StoryCard({ story, loaded }) {
  if (!loaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div class="max-w-lg bg-white shadow-md rounded-lg my-4 mx-auto">
        <div class="py-4 px-8 mt-3">
          <div class="flex flex-col mb-8">
            <h2 class="text-gray-700 font-semibold text-2xl tracking-wide mb-2">{story.title}</h2>
            <p class="text-gray-500 text-base">{story.id}</p>
          </div>
          <div class="bg-gray-100 rounded-lg">
            <div class="py-4 px-4">
              <div class="flex flex-col">
                <h4 class="text-lg font-semibold mb-3">Part {story.part} of 1</h4>
                <div class="flex flex-col text-sm text-gray-500">
                  <span class="mb-1">Posted {story.created_at} </span>
                  <span class="mb-1">The full story inside!</span>
                </div>
              </div>
            </div>
          </div>
          <div class="py-4">
            <a
              href={`/stories/${story.id}`}
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
