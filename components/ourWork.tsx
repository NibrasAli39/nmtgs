import React from "react";
import WorksBox from "./worksBox";

export default function OurWork() {
  return (
    <div className="flex flex-col w-screen min-h-screen p-8 ">
      <div className="mt-12 z-10 text-2xl  sm:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">
        Latest Projects
      </div>
      <div className="text-sm mt-4 text-zinc-400 border-b border-zinc-800 pb-8">
        Take a look at our latest projects
      </div>
      <div className="grid grid-cols-6 py-16 gap-16">
        <div className="lg:col-span-3 col-span-6">
          <WorksBox name="GreenScape" description="Established" />
        </div>
        <div className="lg:col-span-3 col-span-6">
          <WorksBox name="Tripeat" description="Happy Clients" />
        </div>
        <div className="lg:col-span-3 col-span-6">
          <WorksBox name="Lingoleer" description="Lines of code" />
        </div>
        <div className="lg:col-span-3 col-span-6">
          <WorksBox name="GoMoon" description="Countries served" />
        </div>
        <div className="lg:col-span-3 col-span-6">
          <WorksBox name="Aasani" description="Git Commits" />
        </div>
        <div className="lg:col-span-3 col-span-6">
          <WorksBox name="Fibre" description="Hours of excellence" />
        </div>
        <div className="lg:col-span-3 col-span-6">
          <WorksBox name="Travelogue" description="Positive Rating" />
        </div>
      </div>
    </div>
  );
}
