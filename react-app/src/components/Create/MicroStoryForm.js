import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const MicroStoryForm = ({ stories, user }) => {
  const history = useHistory();

  const [isNewStory, setIsNewStory] = useState(false);
  const [storyId, setStoryId] = useState();
  const [tier, setTier] = useState();
  const [newStoryTitle, setNewStoryTitle] = useState('');
  const [microStoryTitle, setMicroStoryTitle] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState({});

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

  useEffect(() => {
    setErrors([]);
  }, [storyId, newStoryTitle, microStoryTitle, content]);

  const resetErrors = async () => await setErrors({});

  const createStory = async () => {
    await resetErrors();
    if (
      content.length <= 300 &&
      content.length > 0 &&
      newStoryTitle.length &&
      microStoryTitle.length
    ) {
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
      const res = await response.json();
      history.push(`/stories/${res['storyId']}/part/1`);
    }
    if (content.length > 300) {
      let newError = Object.assign({}, errors);
      newError.microStoryError = 'Microstories must be 300 characters or fewer.';
      setErrors(newError);
    }
    if (content.length === 0) {
      let newError = Object.assign({}, errors);
      newError.microStoryError = 'Microstories cannot be empty.';
      setErrors(newError);
    }
    if (!newStoryTitle.length) {
      let newError = Object.assign({}, errors);
      newError.newStoryTitleError = 'Please provide a Story title.';
      setErrors(newError);
    }
    if (microStoryTitle.length === 0) {
      let newError = Object.assign({}, errors);
      newError.microStoryTitleError = 'Please provide a microstory title.';
      setErrors(newError);
    }
  };

  const addMicroStory = async () => {
    await resetErrors();
    if (content.length <= 300 && content.length > 0 && microStoryTitle.length > 0 && storyId) {
      const response = await fetch(`/api/stories/${storyId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          microStoryTitle,
          content,
        }),
      });
      const res = await response.json();
      history.push(`/stories/${storyId}/part/${res['partId']}`);
    }
    if (content.length > 300) {
      let newError = Object.assign({}, errors);
      newError.microStoryError = 'Microstories must be 300 characters or fewer.';
      setErrors(newError);
    }
    if (content.length === 0) {
      let newError = Object.assign({}, errors);
      newError.microStoryError = 'Microstories cannot be empty.';
      setErrors(newError);
    }
    if (microStoryTitle.length === 0) {
      let newError = Object.assign({}, errors);
      newError.microStoryTitleError = 'Please provide a microstory title.';
      setErrors(newError);
    }
    if (!storyId) {
      let newError = Object.assign({}, errors);
      newError.idError = 'Choose an existing story, or create a new one.';
      setErrors(newError);
    }
  };

  return (
    <>
      <div className="text-center font-bold text-2xl m-5 text-indigo">New Microstory</div>
      <div className="bg-white mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        {errors.idError && <p className="text-red-400">{errors.idError}</p>}
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
          <>
            {errors.newStoryTitleError && (
              <p className="text-red-400">{errors.newStoryTitleError}</p>
            )}
            <input
              className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
              spellCheck="false"
              placeholder="Story Name"
              type="text"
              value={newStoryTitle}
              onChange={(e) => setNewStoryTitle(e.target.value)}
            />
          </>
        )}
        {errors.microStoryTitleError && (
          <p className="text-red-400">{errors.microStoryTitleError}</p>
        )}
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Microstory Name"
          type="text"
          value={microStoryTitle}
          onChange={(e) => setMicroStoryTitle(e.target.value)}
        />
        {errors.microStoryError && <p className="text-red-400">{errors.microStoryError}</p>}
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
