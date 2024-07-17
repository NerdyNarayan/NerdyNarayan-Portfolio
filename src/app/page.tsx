import React from "react";

import MainNav from "../components/mainNav";
import Hero from "./home/hero";
import MyProjects from "./home/my-projects";
import AboutMe from "./home/about-me";

export default function HomePage() {
  return (
    <div className="container flex max-w-5xl flex-col  sm:min-h-screen overflow-y-scroll no-scrollbar">
      <MainNav />
      <Hero />
      <MyProjects />
      <AboutMe />
    </div>
  );
}
