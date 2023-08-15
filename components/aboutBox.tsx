import React from "react";
import Image from "next/image";
import linkedin from "@/public/linkedin.svg";
import cv from "@/public/cv.svg";
import git from "@/public/git.svg";

interface props {
  name: string;
  description: string;
  linkedin: string;
  github: string;
  cv: string;
}

export default function AboutBox(props: props) {
  return (
    <div className="p-12 w-full h-full border border-zinc-800 rounded shadow-lg">
      <div className="z-10 text-2xl  sm:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">
        {props.name}
      </div>
      <div className="text-sm mt-4 text-zinc-400 ">{props.description}</div>
      <div className="flex flex-row justify-start mt-8 gap-x-12">
        <div>
          <a href={props.github}>
            <Image priority src={git} alt="Github" width={25} />
          </a>
        </div>
        <div>
          <a href={props.linkedin}>
            <Image priority src={linkedin} alt="Linkedin" width={25} />
          </a>
        </div>
        <div>
          <a href={props.cv}>
            <Image priority src={cv} alt="CV" width={25} />
          </a>
        </div>
      </div>
    </div>
  );
}
