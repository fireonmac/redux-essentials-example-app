import { combineReducers, configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

export default configureStore({
  reducer: rootReducer
})
