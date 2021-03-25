import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import microStoryReducer, { loadStory } from '../../store/microStory';

function Story() {
  const dispatch = useDispatch();
  const { storyId, partNum } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [partNumber, setPartNumber] = useState(partNum - 1);
  const microStories = useSelector((state) => state.microStory);

  useEffect(() => {
    dispatch(loadStory(storyId)).then(() => setLoaded(true));
  }, [dispatch]);

  return (
    <div className="flex-1 overflow-y-auto bg-indigo-50 h-screen">
      {loaded && (
        <>
          <div className="flex flex-col items-center bg-indigo-800 h-3/5 text-center px-24">
            <h1 className="text-white text-6xl md:py-20 py-6">{microStories[partNumber].title}</h1>
            <div className="bg-indigo-900 md:w-1/3 w-5/6 w-full text-white text-4xl py-8 px-8 rounded-lg">
              {microStories[partNumber].content}
            </div>
          </div>
          <div className="flex flex-row items-center justify-around bg-gray-300">
            {microStories[partNumber].part === 1 ? (
              <div className="text-gray-500 font-bold opacity-50">Previous</div>
            ) : (
              <button
                onClick={() => setPartNumber(Number(partNumber) - 1)}
                className="text-indigo font-bold hover:text-red-500"
              >
                Previous
              </button>
            )}
            <div>
              {microStories[partNumber].story.title}
              {microStories.length > 1 ? `: Part ${microStories[partNumber].part}` : ''}
            </div>
            {microStories[partNumber].part === microStories[partNumber].story.parts ? (
              <div className="text-gray-500 font-bold opacity-50">Next</div>
            ) : (
              <button
                onClick={() => setPartNumber(Number(partNumber) + 1)}
                className="text-indigo font-bold hover:text-red-500"
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
      <button onClick={() => console.log(partNumber)}>Click me</button>
    </div>
  );
}

export default Story;
