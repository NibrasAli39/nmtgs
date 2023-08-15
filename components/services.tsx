import React from "react";
import StatsBox from "./statsBox";
import ServiceBox from "./serviceBox";

export default function Services() {
  return (
    <div className="flex flex-col w-screen min-h-screen p-8 bg-white">
      <div className="mt-12 z-10 text-2xl font-bold sm:text-3xl md:text-4xl whitespace-nowrap bg-clip-text text-slate-950">
        What we offer
      </div>
      <div className="text-sm mt-4 text-zinc-400 border-b border-zinc-800 pb-8">
        Here's a glance at what we do
      </div>
      <div className="grid grid-cols-6 lg:grid-cols-12 py-16 gap-16">
        <div className="lg:col-span-6 col-span-6">
          <ServiceBox
            name="Web Applications"
            description="Delivering cutting-edge web solutions with expertise in React, Node, and AWS. We build scalable, secure, and user-friendly web applications that elevate your online presence and drive business growth."
          />
        </div>
        <div className="lg:col-span-6 col-span-6">
          <ServiceBox
            name="Mobile Applications"
            description="From seamless cross-platform experiences with Flutter to native iOS apps in Swift, and feature-rich React Native apps, we create mobile solutions that captivate users, boost engagement, and fuel your success in the app market."
          />
        </div>
        <div className="lg:col-span-6 col-span-6">
          <ServiceBox
            name="Data Science"
            description="Harnessing the power of data to unlock valuable insights and make informed decisions. Our data science team leverages advanced analytics, AI, and machine learning to optimize processes, enhance predictions, and drive innovation."
          />
        </div>
        <div className="lg:col-span-6 col-span-6">
          <ServiceBox
            name="DevOps"
            description="Seamlessly integrating development and operations, we streamline your workflow and ensure efficient, reliable, and continuous delivery. Our DevOps solutions empower your team to focus on innovation while we take care of the rest."
          />
        </div>
      </div>
    </div>
  );
}
