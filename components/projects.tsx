import React from "react";
import ProjectBox from "./projectBox";

export default function Projects() {
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
        Projects
      </div>
      <div className="text-sm mt-4 text-zinc-400 border-b border-zinc-800 pb-8">
        Take a look at some our projects
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-16 gap-16">
        <div className="col-span-1">
          <ProjectBox
            date="Jul 1, 2023"
            name="Forgima"
            description="Forigma is a world leading agency whose website was developed by NMTGS"
            views="24k"
          />
        </div>
        <div className="col-span-1">
          <ProjectBox
            date="Jul 1, 2023"
            name="Forgima"
            description="Forigma is a world leading agency whose website was developed by NMTGS"
            views="24k"
          />
        </div>
        <div className="col-span-1">
          <ProjectBox
            date="Jul 1, 2023"
            name="Forgima"
            description="Forigma is a world leading agency whose website was developed by NMTGS"
            views="24k"
          />
        </div>
        <div className="col-span-1">
          <ProjectBox
            date="Jul 1, 2023"
            name="Forgima"
            description="Forigma is a world leading agency whose website was developed by NMTGS"
            views="24k"
          />
        </div>
        <div className="col-span-1">
          <ProjectBox
            date="Jul 1, 2023"
            name="Forgima"
            description="Forigma is a world leading agency whose website was developed by NMTGS"
            views="24k"
          />
        </div>
        <div className="col-span-1">
          <ProjectBox
            date="Jul 1, 2023"
            name="Forgima"
            description="Forigma is a world leading agency whose website was developed by NMTGS"
            views="24k"
          />
        </div>
      </div>
    </div>
  );
}
