import React from "react";
import Button from "./Button";
import { ITool } from "@/type";

const SingleTool: React.FC<{
  tool: ITool;
}> = ({ tool }) => {
  return (
    <div className="border border-gray-300 p-4 mb-4 rounded">
      <div className="flex justify-between items-center mb-2">
        <span className="text-blue-500">ID: {tool.id}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-green-500">Name: {tool.name}</span>
        <span className="text-yellow-500">Category: {tool.category}</span>
        <span className="text-red-500">Location: {tool.location}</span>
      </div>
      <div>
        <Button type="button" size="large">
          Update
        </Button>
        <Button type="button" size="small">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default SingleTool;
