// components/ToolList.tsx

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { Tool } from "../app/slices/toolsSlice";

const ToolList: React.FC = () => {
  const dispatch = useDispatch();
  const tools = useSelector((state: RootState) => state.tools.tools);

  useEffect(() => {
    // Fetch tools from backend and dispatch setTools action
  }, [dispatch]);

  return (
    <div>
      <h2>Tool List</h2>
      <ul>
        {tools.map((tool: Tool) => (
          <li key={tool.id}>{tool.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToolList;
