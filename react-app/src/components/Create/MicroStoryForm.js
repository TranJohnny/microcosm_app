import React, { useState, useEffect } from 'react';

const MicroStoryForm = ({ stories, user }) => {
  const [isNewStory, setIsNewStory] = useState(false);
  const [storyId, setStoryId] = useState();
  const [tier, setTier] = useState();
  const [newStoryTitle, setNewStoryTitle] = useState('');
  const [microStoryTitle, setMicroStoryTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (storyId === 'Create New Story') {
      setIsNewStory(true);
    } else {
      setIsNewStory(false);
      if (storyId && storyId !== 'Create New Story') {
        setTier(user.stories[storyId].tier);
      } else {
        setTier(0);
      }
    }
  }, [storyId]);

  const createStory = async () => {
    const response = await fetch('/api/stories/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        newStoryTitle,
        tier,
        author_id: user.id,
        microStoryTitle,
        content,
      }),
    });
    return await response.json();
  };

  const addMicroStory = () => {
    console.log('adding microstory...');
  };

  return (
    <>
      <div className="text-center font-bold text-2xl m-5 text-indigo">New Microstory</div>
      <button onClick={() => console.log(isNewStory, storyId, tier)}>Click</button>
      <div className="bg-white mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <select
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Story Name"
          type="text"
          value={storyId}
          onChange={(e) => setStoryId(e.target.value)}
        >
          <option disabled selected hidden value="">
            Add Microstory to:
          </option>
          {stories.map((story) => (
            <option key={story.id} value={story.id}>
              {story.title}
            </option>
          ))}
          <option value="Create New Story">Create New Story</option>
        </select>
        {isNewStory && (
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            spellCheck="false"
            placeholder="Story Name"
            type="text"
            value={newStoryTitle}
            onChange={(e) => setNewStoryTitle(e.target.value)}
          />
        )}
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Microstory Name"
          type="text"
          value={microStoryTitle}
          onChange={(e) => setMicroStoryTitle(e.target.value)}
        />
        <textarea
          className="bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Write your story here."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <div className="flex text-gray-500 m-2 ml-0">
          <div className="flex flex-row items-center">
            {isNewStory && (
              <select
                className="ml-0 border bg-white border-gray-400 text-gray-700 focus:bg-gray-50"
                value={tier}
                onChange={(e) => setTier(Number(e.target.value))}
              >
                <option value={0}>Free Tier</option>
                <option value={1}>Bronze Tier</option>
                <option value={2}>Silver Tier</option>
                <option value={3}>Gold Tier</option>
              </select>
            )}
          </div>
          <div className={'count ml-auto text-xs font-semibold align-center'}>
            <span className={content.length > 300 ? 'text-red-500' : 'text-gray-400'}>
              {content.length}/300
            </span>
          </div>
        </div>

        <div className="buttons flex">
          <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto hover:bg-gray-100">
            Cancel
          </div>
          {isNewStory ? (
            <button
              onClick={createStory}
              className="btn border border-indigo-600 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-600 hover:bg-indigo-700"
            >
              Create Story
            </button>
          ) : (
            <button
              onClick={addMicroStory}
              className="btn border border-indigo-600 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-600 hover:bg-indigo-700"
            >
              Add to story
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default MicroStoryForm;
