// slices/toolsSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Tool {
  id: number;
  name: string;
  category: string;
  location: string;
  icon: string;
}

interface ToolsState {
  tools: Tool[];
}

const initialState: ToolsState = {
  tools: [],
};

const toolsSlice = createSlice({
  name: "tools",
  initialState,
  reducers: {
    addTool(state, action: PayloadAction<Tool>) {
      state.tools.push(action.payload);
    },
    setTools(state, action: PayloadAction<Tool[]>) {
      state.tools = action.payload;
    },
  },
});

export const { reducer, actions } = toolsSlice;
export default toolsSlice.reducer;
