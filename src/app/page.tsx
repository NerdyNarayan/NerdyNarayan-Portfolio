import React from "react";

import MainNav from "../components/mainNav";
import Hero from "./home/hero";
import MyProjects from "./home/my-projects";
import AboutMe from "./home/about-me";

export default function HomePage() {
  return (
    <div className="relative">
      <div className="absolute top-0 -z-10 h-full w-full bg-background">
        <div className="absolute  right-0 top-[-220] h-[500px] w-[600px] -translate-x-[30%] translate-y-[20%] rounded-full dark:bg-[rgba(200,209,300,0.5)] bg-[rgba(30,000,100,100.8)] opacity-40 blur-[90px]"></div>
      </div>{" "}
      <div className=" container   flex max-w-5xl flex-col  sm:min-h-screen overflow-y-scroll no-scrollbar">
        <div className="z-40">
          <MainNav />
          <div className="h-20"></div>
          <Hero />
          <MyProjects />
          <AboutMe />
        </div>
      </div>
    </div>
  );
}
