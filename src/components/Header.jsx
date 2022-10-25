import React from "react";

export default function Header({ title }) {
  return (
    <div
      className="w-full bg-orange-400 fixed top-0 left-0 flex 
    items-center h-[50px] px-[30px]"
    >
      <h1 className="text-[16px] text-gray-800 font-bold">{title}</h1>
    </div>
  );
}
