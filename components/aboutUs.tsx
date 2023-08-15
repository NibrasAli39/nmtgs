import React from "react";
import StatsBox from "./statsBox";
import ServiceBox from "./serviceBox";
import AboutBox from "./aboutBox";

export default function AboutUs() {
  return (
    <div className="flex flex-col w-screen min-h-screen p-8">
      <div className="mt-12 z-10 text-2xl font-bold sm:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">
        About Us
      </div>
      <div className="text-sm mt-4 text-zinc-400 border-b border-zinc-800 pb-8">
        Meet the team
      </div>
      <div className="grid grid-cols-6 lg:grid-cols-12 py-16 gap-16">
        <div className="lg:col-span-6 col-span-6">
          <AboutBox
            name="Nibras Ali"
            description="As a strategic thinker and a passionate fullstack developer, Nibras drives our
            company's growth with a unique blend of creativity and management.
            His commitment to client satisfaction and innovation propels us
            towards excellence."
            linkedin="https://www.linkedin.com/in/nibras-ali-459642172/"
            github="https://github.com/NibrasAli39"
            cv="/nibras"
          />
        </div>
        <div className="lg:col-span-6 col-span-6">
          <AboutBox
            name="Mersab Ali"
            description="Passionate about coding and innovation, Mersab leads our technical
            endeavors with expertise in fullstack web development and game
            design. His visionary approach ensures seamless integration of
            cutting-edge technologies into our projects."
            linkedin="https://www.linkedin.com/in/mersab-ali-636a83154/"
            github="https://github.com/mersib"
            cv="/mersib"
          />
        </div>
      </div>
    </div>
  );
}
