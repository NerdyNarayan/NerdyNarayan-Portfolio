import React from "react";

import DevelopmentBanner from "@/components/ui/development-banner";
import Footer from "@/components/home/footer";

import Hero from "../components/home/hero";
import MyProjects from "../components/home/my-projects";
import AboutMe from "../components/home/about-me";
import LatestPost from "../components/home/latest-post";
export default function HomePage() {
  return (
    <div className=" flex justify-center ">
      <div className="absolute -z-50 bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
      <div className=" container absolute z-10  flex  flex-col  sm:min-h-screen overflow-y-scroll no-scrollbar">
        <DevelopmentBanner />
        <div className="z-40">
          <div className="h-20" />
          <Hero />
          <MyProjects />

          <AboutMe />
          <LatestPost />
          <Footer />
          <div className="absolute -z-50 left-auto right-0 bottom-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[70%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
        </div>
      </div>
    </div>
  );
}
