import React, { useState, useEffect } from 'react';

function StoryCard({ story }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div>Test</div>
      <button onClick={() => console.log(story)}>Click</button>
    </>
  );
}
export default StoryCard;
