// components/ToolList.tsx
import {
  faWrench,
  faHammer,
  faPlusSquare,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { Tool } from "../app/slices/toolsSlice";
import SingleTool from "./SingleTool";
import Button from "./Button";

const ToolList: React.FC = () => {
  const tools = [
    {
      id: 1,
      name: "screwdriver",
      category: "test",
      location: "test",
      icon: faWrench.iconName,
    },
    {
      id: 2,
      name: "torch",
      category: "test2",
      location: "test2",
      icon: faHammer.iconName,
    },
    {
      id: 3,
      name: "spanner",
      category: "test3",
      location: "test3",
      icon: faCubes.iconName,
    },
  ];

  // const dispatch = useDispatch();
  // const tools = useSelector((state: RootState) => state.tools.tools);

  // useEffect(() => {

  // }, [dispatch]);

  return (
    <div>
      <Button type="button" destination="/add-new-tool">
        Add new Tool
      </Button>
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
