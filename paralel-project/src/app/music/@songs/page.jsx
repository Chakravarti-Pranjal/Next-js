import { Clock, Heart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { resolve } from "styled-jsx/css";

const Songs = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Loading...");
    }, 800)
  );
  const songs = [
    {
      id: 1,
      artist: "The Weeknd",
      title: "Blinding Lights",
      time: "3:20",
    },
    {
      id: 2,
      artist: "Ed Sheeran",
      title: "Shape of You",
      time: "3:53",
    },
    {
      id: 3,
      artist: "Billie Eilish",
      title: "Bad Guy",
      time: "3:14",
    },
    {
      id: 4,
      artist: "Dua Lipa",
      title: "Levitating",
      time: "3:23",
    },
    {
      id: 5,
      artist: "Imagine Dragons",
      title: "Believer",
      time: "3:24",
    },
  ];

  return (
    <div className="w-[96%] mx-auto px-4">
      <h2 className="text-3xl text-white mt-8 font-bold mb-6">
        Songs Collections
      </h2>

      <ul className="space-y-4">
        {songs.map((song) => (
          <Link href={`/music/${song.id}`} key={song.id}>
            <li key={song.id}>
              <div className="flex items-cener justify-between p-3 hover:bg-[#2a2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105">
                <div className="flex items-center gap-5">
                  <img
                    src="https://images.unsplash.com/photo-1493612276216-ee3925520721?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww"
                    className="h-16 w-16 bg-gray-700 rounded-md"
                  />

                  <div>
                    <p className="text-white font-medium">{song?.artist}</p>
                    <p className="text-sm text-gray-400">{song?.title}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{song.time}</span>
                  </div>

                  <Heart
                    size={16}
                    className="cursor-pointer hover:text-red-500"
                  />
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Songs;
