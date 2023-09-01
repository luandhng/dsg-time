"use client";

import { useState } from "react";

interface BoxModel {
  name: string;
}

const Box = ({ name }: BoxModel) => {
  const [checkIn, setCheckIn] = useState(false);

  return (
    <div
      onClick={() => setCheckIn((prev) => !prev)}
      className={`flex flex-col gap-2 ${
        checkIn ? `bg-[#5dbe74]` : `bg-[#1d1d1d]`
      } ${
        checkIn ? `text-black` : `text-white`
      } cursor-pointer select-none rounded-xl justify-center items-center border border-neutral-800 font-medium text-8xl text-center`}
    >
      {name}
    </div>
  );
};

export default Box;
