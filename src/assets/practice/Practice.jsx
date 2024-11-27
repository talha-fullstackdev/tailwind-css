import React from "react";
const Practice = () => {
  return (
    <div className="bg-gray-700 max-w-[1200px]  text-sm md:text-xl md:ml-2 md:mr-2  flex flex-col text-white items-center gap-3 md:p-6 md:flex-row md:justify-between lg:m-auto lg:text-4xl">
      <h1>logo</h1>
      <ul className="md:flex-row flex flex-col gap-2 md:gap-8 lg:cursor-pointer">
        <li>home</li>
        <li>about</li>
        <li>contact</li>
        <li>services</li>
      </ul>
    </div>
  );
};

export default Practice;
