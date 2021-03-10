import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadStory } from '../../store/microStory';

function Story() {
  const dispatch = useDispatch();
  const { storyId, partNum } = useParams();
  const microStories = useSelector((state) => state.microStories);

  useEffect(() => {
    dispatch(loadStory(storyId));
  });

  return (
    <div className="bg-indigo-50 h-screen">
      <div>STORY COMPONENT</div>
    </div>
  );
}

export default Story;
