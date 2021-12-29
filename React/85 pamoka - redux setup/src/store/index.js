import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initState = {
  todos: [],
};

// eslint-disable-next-line default-param-last
const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // Aprašysim vėliau, kaip yra keičiamas state
      return state;
    case 'DELETE_TODO':
      // Aprašysim vėliau, kaip yra keičiamas state
      return state;
    case 'UPDATE_TODO':
      // Aprašysim vėliau, kaip yra keičiamas state
      return state;
    default:
      return state;
  }
};

const store = createStore(
  mainReducer,
  composeWithDevTools(),
);

export default store;
