
import { combineReducers } from "@reduxjs/toolkit";
import toolsReducer from "../slices/toolsSlice";

const rootReducer = combineReducers({
  tools: toolsReducer,
  // Other reducers...
});

export type RootState = ReturnType<typeof rootReducer>;
