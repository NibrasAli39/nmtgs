import React from "react";

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
    <div>
      {navItems.map((item, index) => {
        return item.name;
      })}
      <div className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        NMTGS
      </div>
    </div>
  );
}
