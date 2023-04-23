import { combineReducers } from 'redux';

import home from './home';
import stacks from './stacks';


const rootReducer = combineReducers({
  home, stacks,
});

export default rootReducer;
