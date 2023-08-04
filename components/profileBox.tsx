import React from "react";

interface props {
  date: string;
  name: string;
  description: string;
  role: string;
}

export default function ProfileBox(props: props) {
  return (
    <div className="p-12 w-full h-full border border-zinc-800 rounded">
      <div className="flex flex-row space-between mb-8">
        <div>{props.date}</div>
        <div></div>
      </div>
      <div className="z-10 text-2xl  sm:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">
        {props.name}
      </div>
      <div className="text-md mt-4 text-zinc-300 ">{props.role}</div>
      <div className="text-sm mt-4 text-zinc-400 ">{props.description}</div>
      <div className="text-sm mt-4 text-zinc-400 border-t border-zinc-800 pt-8">
        Techologies used
      </div>
    </div>
  );
}
