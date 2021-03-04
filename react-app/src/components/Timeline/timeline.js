import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Timeline() {
  const [microStories, setMicroStories] = useState({});
  const currentUser = useSelector((state) => state.user);
  // Notice we use useParams here instead of getting the params
  // From props.
  // const { userId } = useParams();

  useEffect(() => {
    if (!currentUser) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${currentUser['id']}/followed_micro_stories`);
      const microStories = await response.json();
      setMicroStories(microStories);
    })();
  }, []);

  if (!microStories) {
    return null;
  }

  return (
    <>
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
      <button onClick={() => console.log(microStories)}>Click here</button>
    </>
  );
}
export default Timeline;
