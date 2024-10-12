import Image from "next/image";
import React from "react";

const Games = () => {
  return (
    <div className="flex flex-col  gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Currently Trending Games</h1>
        <button className="bg-gray-900 border text-md border-gray-900 transition-all duration-500 hover:bg-transparent hover:border-white p-2 hover:text-[#E87D0E] px-6 rounded-xl">
          SEE ALL
        </button>
      </div>
      <div className="flex items-center mt-10 justify-between">
        <div className="flex flex-col items-center  group relative  gap-4">
          <Image
            src={"/cyberpunk.jpg"}
            width={200}
            height={200}
            className="rounded-lg transition-all duration-500 group-hover:blur-sm   "
          />
          <p className="flex absolute bottom-1 items-center opacity-0  transition-all duration-300 group-hover:opacity-100 gap-4">
            <Image src={"/flame.svg"} width={15} height={15} />
            40 Followers
          </p>
        </div>
        <div className="flex flex-col items-center  group relative  gap-4">
          <Image
            src={"/minecraft.jpg"}
            width={200}
            height={200}
            className="rounded-lg transition-all duration-500 group-hover:blur-sm   "
          />
          <p className="flex absolute bottom-1 items-center opacity-0  transition-all duration-300 group-hover:opacity-100 gap-4">
            <Image src={"/flame.svg"} width={15} height={15} />
            40 Followers
          </p>
        </div>
        <div className="flex flex-col items-center  group relative  gap-4">
          <Image
            src={"/ghost.jpg"}
            width={200}
            height={200}
            className="rounded-lg transition-all duration-500 group-hover:blur-sm   "
          />
          <p className="flex absolute bottom-1 items-center opacity-0  transition-all duration-300 group-hover:opacity-100 gap-4">
            <Image src={"/flame.svg"} width={15} height={15} />
            40 Followers
          </p>
        </div>
        <div className="flex flex-col items-center  group relative  gap-4">
          <Image
            src={"/baku.jpg"}
            width={200}
            height={200}
            className="rounded-lg transition-all duration-500 group-hover:blur-sm   "
          />
          <p className="flex absolute bottom-1 items-center opacity-0  transition-all duration-300 group-hover:opacity-100 gap-4">
            <Image src={"/flame.svg"} width={15} height={15} />
            40 Followers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Games;
