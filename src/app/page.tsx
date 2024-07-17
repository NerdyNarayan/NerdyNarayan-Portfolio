import React from "react";

import MainNav from "../components/mainNav";
import Hero from "../components/hero";
import MyProjects from "../components/my-projects";

export default function HomePage() {
  return (
    <div className="container flex max-w-4xl flex-col  sm:min-h-screen overflow-y-scroll no-scrollbar">
      <MainNav />
      <Hero />
      <MyProjects />
      <div></div>
    </div>
  );
}
