import React from "react";
import BiodataCard from "../components/BiodataCard";
import Header from "../components/Header";
import { FiUser } from "react-icons/fi";

export default function Biodata() {
  return (
    <div
      className="w-screen min-h-screen flex flex-col bg-[#212121] text-orange-400
    overflow-hidden p-[30px]"
    >
      <Header title={"Biodata"} />
      <div className="mt-[50px] flex flex-col justify-center items-center relative">
        <img
          src="https://images.pexels.com/photos/906531/pexels-photo-906531.jpeg?
        auto=compress&cs=tinysrgb&w=200"
          alt=""
          className="rounded-full w-[200px] 
        h-[200px] object-cover"
        />
        <div
          className="border-[3px] border-orange-400 rounded-full w-[220px]
         h-[220px] border-dashed absolute"
        ></div>
      </div>
      <div className="flex flex-col gap-6 mt-6">
        <BiodataCard 
        label={"Nama Lengkap"} 
        value={"Andi ismail"} 
        icons={<FiUser />} 
        link={'https://andiismail.showwcase.com'}
        />
      </div>
      
    </div>
  );
}
