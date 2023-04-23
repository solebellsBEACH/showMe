import { combineReducers } from 'redux';

import home from './home';
import stacks from './stacks';
import hobbies from './hobbies';

const rootReducer = combineReducers({
  home,
  hobbies,
  stacks,
});

export default rootReducer;
