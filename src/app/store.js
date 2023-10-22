import { combineReducers, configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice';

const rootReducer = combineReducers({
  posts: postsReducer
});

export default configureStore({
  reducer: rootReducer
})
