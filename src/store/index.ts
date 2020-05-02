import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { todosReducer } from './todos';

const rootReducer = combineReducers({
  todos: todosReducer,
});

const initialState = history.state || {};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: [thunk],
});

store.subscribe(() => {
  const state = store.getState();

  history.replaceState(state, '', location.pathname);
});

export type RootState = ReturnType<typeof store.getState>;
