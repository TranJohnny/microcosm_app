const SAVE_MICRO_STORY = 'microStory/SAVE_MICRO_STORY';
const RESET_MICRO_STORY = 'microStory/RESET_MICRO_STORY';

const save_micro_story = (microStories) => ({
  type: SAVE_MICRO_STORY,
  microStories,
});

const reset_micro_story = () => ({
  type: RESET_MICRO_STORY,
});

export const resetMicroStories = () => async (dispatch) => {
  await dispatch(reset_micro_story());
  return;
};

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
    case RESET_MICRO_STORY: {
      newState = {};
      return newState;
    }
    default:
      return state;
  }
};

export default microStoryReducer;
