import React from "react";
import { Link } from "react-router-dom";
import { FaPause } from "react-icons/all";

export default function Home() {
  return (
    <div
      className="w-screen h-screen overflow-hidden flex flex-col text-orange-400
    bg-[#212121]"
    >
      <h1>Hello</h1>
      <div className="relative flex flex-col items-center my-12">
        <div
          className="bg-[url(https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=600)]
        h-[500px] w-[500px] bg-cover rounded-full"
        ></div>
        <div
          className="border-[6px] h-[530px] w-[530px] border-orange-500 rounded-full 
        -top-[15px] absolute"
        ></div>
      </div>
      <h1 className="text-[36px]">Nama saya Andi Ismail</h1>
      <p className="text-[26px]">Seorang web developer</p>
      <Link to={"/biodata"} className='fixed bottom-0 right-0'>
        <FaPause className="text-[36px] text-green-500" />
      </Link>
    </div>
  );
}
