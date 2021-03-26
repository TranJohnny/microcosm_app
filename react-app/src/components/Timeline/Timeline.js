import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import StoryCard from './StoryCard';
import { loadMicroStories } from '../../store/microStory';
import UserSideBar from './UserSideBar';

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
  }, [dispatch, currentUser]);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="grid grid-cols-6 justify-center justify-between bg-indigo-50 min-h-full">
        <div className="hidden xl:block 2xl:col-span-1"></div>
        <div className="flex flex-col col-span-2 lg:col-span-2 2xl:col-span-1 flex-1 content-center items-center hidden md:block mx-2">
          <div className="fixed">
            {loaded && (
              <UserSideBar followed={currentUser ? currentUser.followed : []} user={currentUser} />
            )}
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-2 bg-gray-50 mx-4 my-4 rounded-lg min-w-min shadow-md">
          {loaded && (
            <div className="flex flex-col flex-1 justify-center items-center my-auto">
              {Object.values(microStories).map((microStory) => (
                <StoryCard story={microStory} loaded={loaded} />
              ))}
            </div>
          )}
          {!Object.values(microStories).length && <StoryCard loaded={loaded} />}
        </div>
        <div className="flex-1 col-span-2 hidden lg:block"></div>
      </div>
    </div>
  );
}
export default Timeline;
