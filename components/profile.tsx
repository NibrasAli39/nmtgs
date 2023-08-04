import React from "react";
import ProfileBox from "./profileBox";

export default function Profile() {
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
    <div className="flex flex-col w-screen min-h-screen p-8">
      <div className="flex flex-row justify-between mb-16">
        <div className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
          back
        </div>
        <div>
          <ul className="flex  gap-4">
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
      </div>
      <div className="z-10 text-2xl  sm:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">
        Resume
      </div>
      <div className="text-sm mt-4 text-zinc-400 border-b border-zinc-800 pb-8">
        An overview of Mersib's professional career
      </div>
      <div className="grid grid-cols-1 py-16 gap-16">
        <div className="col-span-1">
          <ProfileBox
            date="April, 2022 - Present"
            name="ATG - Ambassadors Theatre Group"
            role="Senior Fullstack Developer"
            description="Forigma is a world leading agency whose website was developed by NMTGS"
          />
        </div>
        <div className="col-span-1">
          <ProfileBox
            date="Feb, 2021 - Feb, 2022"
            name="LuckyTruck"
            role="Senior Fullstack Developer"
            description="Forigma is a world leading agency whose website was developed by NMTGS"
          />
        </div>
        <div className="col-span-1">
          <ProfileBox
            date="Feb, 2020 - Feb, 2021"
            name="Balawal IT Solutions"
            role="Fullstack Developer"
            description="Forigma is a world leading agency whose website was developed by NMTGS"
          />
        </div>
        <div className="col-span-1">
          <ProfileBox
            date="May, 2018 - May, 2020"
            name="UshAR"
            role="Co-Founder / CTO"
            description="Forigma is a world leading agency whose website was developed by NMTGS"
          />
        </div>
      </div>
    </div>
  );
}
