import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import microStoryReducer, { loadStory } from '../../store/microStory';

function Story() {
  const dispatch = useDispatch();
  const { storyId, partNum } = useParams();
  const [loaded, setLoaded] = useState(false);
  const microStories = useSelector((state) => state.microStory);

  useEffect(() => {
    dispatch(loadStory(storyId)).then(() => setLoaded(true));
  }, [dispatch]);

  return (
    <div className="bg-indigo-50 h-screen">
      <div>STORY COMPONENT</div>
      {loaded && (
        <>
          <div>{microStories[partNum - 1].title}</div>
          <div>{microStories[partNum - 1].content}</div>
        </>
      )}
      <div>STORY COMPONENT</div>
    </div>
  );
}

export default Story;
