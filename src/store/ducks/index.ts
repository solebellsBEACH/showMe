import { combineReducers } from 'redux';

import home from './home';
import stacks from './stacks';
import hobbies from './hobbies';
import application from './application';

const rootReducer = combineReducers({
  home,
  application,
  hobbies,
  stacks,
});

export default rootReducer;
