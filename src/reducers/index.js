import { combineReducers } from 'redux';
import user from './user';
import current from './current';

export default combineReducers({
    user,
    current
});