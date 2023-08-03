import React from "react";
import StatsBox from "./statsBox";

export default function Stats() {
  return (
    <div className="flex flex-col w-screen min-h-screen p-8 ">
      <div className="mt-12 z-10 text-2xl  sm:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">
        Nmtgs at a glance
      </div>
      <div className="text-sm mt-4 text-zinc-400 border-b border-zinc-800 pb-8">
        The numbers don't lie
      </div>
      <div className="grid grid-cols-6 lg:grid-cols-8 py-16 gap-16">
        <div className="lg:col-span-2 col-span-6">
          <StatsBox name="2019" description="Established" />
        </div>
        <div className="lg:col-span-2 col-span-6">
          <StatsBox name="17+" description="Happy Clients" />
        </div>
        <div className="lg:col-span-2 col-span-6">
          <StatsBox name="18k+" description="Lines of code" />
        </div>
        <div className="lg:col-span-2 col-span-6">
          <StatsBox name="12" description="Countries served" />
        </div>
        <div className="lg:col-span-2 col-span-6">
          <StatsBox name="673" description="Git Commits" />
        </div>
        <div className="lg:col-span-2 col-span-6">
          <StatsBox name="2700" description="Hours of excellence" />
        </div>
        <div className="lg:col-span-2 col-span-6">
          <StatsBox name="99%" description="Positive Rating" />
        </div>
        <div className="lg:col-span-2 col-span-6">
          <StatsBox name="1 Goal" description="Turning vision into reality" />
        </div>
      </div>
    </div>
  );
}
