import React from "react";

interface props {
  name: string;
  description: string;
}

export default function WorksBox(props: props) {
  return (
    <div className="p-12 w-full h-full border border-zinc-800 rounded">
      <div className="z-10 text-2xl  sm:text-3xl md:text-4xl whitespace-nowrap bg-clip-text">
        {props.name}
      </div>
      <div className="text-sm mt-4 text-zinc-400 ">{props.description}</div>
    </div>
  );
}
