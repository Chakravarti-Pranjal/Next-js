import React from "react";
import { Clock, Home, Save, TrendingUp } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#111111] text-white flex flex-col justify-between p-4 min-h-screen">
      <section>
        <h2 className="text-xl font-bold">MENU</h2>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Home /> Discover
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <TrendingUp /> Trending
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Clock /> Recent
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Save /> Saved
            </li>
          </ul>
        </nav>
      </section>

      <section>
        <h2 className="mt-6 text-xl font-bold">FAVORITE</h2>
        <ul className="mt-2 mb-[2rem]">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex mt-[2rem] gap-4">
              <img
                src="https://images.unsplash.com/photo-1493612276216-ee3925520721?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww"
                className="h-15 w-15 bg-gray-700 rounded-md"
              />
              <div>
                <p className="text-white">Random</p>
                <p className="text-sm text-gray-400">Person</p>
              </div>
            </div>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
