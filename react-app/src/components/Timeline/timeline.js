import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Timeline() {
  const [microStories, setMicroStories] = useState({});
  const [loaded, setLoaded] = useState(false);
  const currentUser = useSelector((state) => state.user);

  useEffect(() => {
    if (!currentUser) {
      return;
    }
    const getMicroStories = async () => {
      const response = await fetch(`/api/users/${currentUser['id']}/followed_micro_stories`);
      const microStories = await response.json();
      setMicroStories(microStories);
    };
    getMicroStories().then(() => setLoaded(true));
  }, []);

  return (
    <>
      {loaded && (
        <ul>
          {Object.values(microStories).map((microStory) => {
            return (
              <li key={microStory.id}>
                <ul>
                  {microStory.title}
                  <li>{microStory.content}</li>
                </ul>
              </li>
            );
          })}
        </ul>
      )}
      <button onClick={() => console.log(loaded)}>Click here</button>
    </>
  );
}
export default Timeline;
