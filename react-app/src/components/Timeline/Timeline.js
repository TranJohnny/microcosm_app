import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import StoryCard from './StoryCard';
import { loadMicroStories } from '../../store/microStory';

function Timeline() {
  const dispatch = useDispatch();
  // const [microStories, setMicroStories] = useState({});
  const [loaded, setLoaded] = useState(true);
  const currentUser = useSelector((state) => state.user);
  const microStories = useSelector((state) => state.microStory);

  useEffect(() => {
    if (!currentUser) {
      return;
    }
    dispatch(loadMicroStories(currentUser)).then(() => setLoaded(true));
    setLoaded(true);
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-row justify-center justify-between bg-indigo-50">
        <div>Test</div>
        {loaded && (
          <div class="flex flex-col justify-center items-center my-auto">
            {Object.values(microStories).map((microStory) => (
              <StoryCard story={microStory} loaded={loaded} />
            ))}
          </div>
        )}
        {!Object.values(microStories).length && <StoryCard loaded={loaded} />}
        <div>Test 2</div>
      </div>
    </>
  );
}
export default Timeline;
