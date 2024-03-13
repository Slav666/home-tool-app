// import React from "react";
// import Button from "./Button";
// import { ITool } from "@/type";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const SingleTool: React.FC<{
//   tool: ITool;
// }> = ({ tool }) => {
//   return (
//     <div className="border border-gray-300 p-4 mb-4 rounded">
//       <div className="flex justify-between items-center mb-2">
//         <span className="text-blue-500">ID: {tool.id}</span>
//       </div>
//       <div className="flex justify-between">
//         <span className="text-green-500">Name: {tool.name}</span>

//         <span className="text-yellow-500 flex items-center">
//           <FontAwesomeIcon icon={tool.icon} className="mr-2" />
//           Category: {tool.category}
//         </span>
//         <span className="text-red-500">Location: {tool.location}</span>
//       </div>
//       <div>
//         <Button type="button" size="large">
//           Update
//         </Button>
//         <Button type="button" size="small">
//           Delete
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default SingleTool;
import React from "react";
import Button from "./Button";
import { ITool } from "@/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faHammer,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons"; // Import Font Awesome icons

const SingleTool: React.FC<{
  tool: ITool;
}> = ({ tool }) => {
  // Map tool names to corresponding Font Awesome icons
  const iconMap: { [key: string]: any } = {
    wrench: faWrench,
    hammer: faHammer,
    square: faPlusSquare,
    // Add more mappings as needed
  };

  return (
    <div className="border border-gray-300 p-4 mb-4 rounded">
      <div className="flex justify-between items-center mb-2">
        <span className="text-blue-500">ID: {tool.id}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-green-500">Name: {tool.name}</span>
        <span className="text-yellow-500 flex items-center">
          <FontAwesomeIcon icon={iconMap[tool.icon]} className="mr-2" />{" "}
          {/* Use iconMap to retrieve the corresponding icon */}
          Category: {tool.category}
        </span>
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
