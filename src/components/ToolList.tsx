// components/ToolList.tsx

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { Tool } from "../app/slices/toolsSlice";
import SingleTool from "./SingleTool";

const ToolList: React.FC = () => {
  const tools = [
    { id: 1, name: "screwdriver", category: "test", location: "test" },
    { id: 2, name: "torch", category: "", location: "test" },
    { id: 3, name: "spanner", category: "test", location: "test" },
  ];
  // const dispatch = useDispatch();
  // const tools = useSelector((state: RootState) => state.tools.tools);

  // useEffect(() => {

  // }, [dispatch]);

  return (
    <div>
      <h2>Tool List</h2>
      <ul>
        {tools.map((tool: Tool) => (
          <SingleTool key={tool.id} tool={tool} />
        ))}
      </ul>
    </div>
  );
};

export default ToolList;
