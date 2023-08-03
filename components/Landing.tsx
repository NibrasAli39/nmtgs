import React from "react";
import Particles from "./Particles";
export default function Landing() {
  interface navItem {
    name: string;
    link: string;
  }

  const navItems: Array<navItem> = [
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navItems.map((item, index) => {
            return (
              <a
                key={item.name}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                href={item.link}
              >
                {item.name}
              </a>
            );
          })}
        </ul>
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"></div>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title  sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        NMTGS
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"></div>
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Hi, we are NMTGS. Fueling digital dreams, your fullstack web
          developers & passionate game enthusiasts.
        </h2>
      </div>
    </div>
  );
}
