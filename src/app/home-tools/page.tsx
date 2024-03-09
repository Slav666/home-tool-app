"use client";
import React from "react";
import ToolList from "@/components/ToolList";

const HomeToolPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ToolList />
    </div>
  );
};

export default HomeToolPage;
