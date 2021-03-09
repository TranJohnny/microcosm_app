const SAVE_MICRO_STORY = 'microStory/SAVE_MICRO_STORY';

const save_micro_story = (microStories) => ({
  type: SAVE_MICRO_STORY,
  microStories,
});

export const loadMicroStories = (user) => async (dispatch) => {
  const response = await fetch(`/api/users/${user.id}/followed_micro_stories`);
  const microStories = await response.json();
  await dispatch(save_micro_story(microStories));
  return;
};

const initialState = {};

const microStoryReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SAVE_MICRO_STORY: {
      newState = Object.assign({}, state);
      newState = action.microStories;
      return newState;
    }
    default:
      return state;
  }
};

export default microStoryReducer;
