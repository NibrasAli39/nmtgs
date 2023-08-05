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
          <WorksBox
            name="GreenScape"
            platform="Web application"
            description="An eco-conscious web application developed with Node and AWS, empowering businesses to monitor and reduce their carbon footprint, track sustainable practices, and contribute to a greener future."
          />
        </div>
        <div className="lg:col-span-3 col-span-6">
          <WorksBox
            name="Tripeat"
            platform="Mobile application"
            description="A heartwarming React Native app connecting pet lovers worldwide, facilitating pet adoption, fostering connections, and featuring pet-friendly events in local communities."
          />
        </div>
        <div className="lg:col-span-3 col-span-6">
          <WorksBox
            name="Lingoleer"
            platform="Mobile application"
            description="A language learning app built in Swift, offering an immersive experience with interactive lessons, real-time conversation practice, and gamified challenges to make mastering a new language enjoyable."
          />
        </div>
        <div className="lg:col-span-3 col-span-6">
          <WorksBox
            name="GoMoon"
            platform="Mobile application"
            description="A delightful cooking assistant app designed in Flutter, offering a vast collection of recipes, step-by-step instructions, and a community-driven space to share culinary creations."
          />
        </div>
        <div className="lg:col-span-3 col-span-6">
          <WorksBox
            name="Aasani"
            platform="Web application"
            description=" An interactive travel booking website developed using React, Node, and integrated with AWS services, providing travelers with easy itinerary planning, real-time updates, and reviews."
          />
        </div>
        <div className="lg:col-span-3 col-span-6">
          <WorksBox
            name="Fibre"
            platform="Web application"
            description="An innovative Node driven platform connecting eco-conscious consumers with local farmers and producers, offering organic produce and sustainable food options."
          />
        </div>
        <div className="lg:col-span-3 col-span-6">
          <WorksBox
            name="Reaction"
            platform="Web application"
            description="A comprehensive React-based e-learning portal, delivering interactive courses, quizzes, and progress tracking for students of all ages."
          />
        </div>
      </div>
    </div>
  );
}
