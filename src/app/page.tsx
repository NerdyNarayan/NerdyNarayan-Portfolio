import React from "react";
import MainNav from "../components/mainNav";
import Hero from "../components/home/hero";
import MyProjects from "../components/home/my-projects";
import AboutMe from "../components/home/about-me";
import Image from "next/image";
import { posts } from "#site/content";
import { Mdx, MDXContent } from "@/components/mdx-components";
import { PreCard } from "@/components/pre-card";
import LatestPost from "../components/home/latest-post";
export default function HomePage() {
  return (
    <div className="mx-auto flex justify-center">
      <div className=" h-full w-full bg-white">
        <div className="absolute -z-10 bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <div className=" container absolute z-10  flex max-w-5xl flex-col  sm:min-h-screen overflow-y-scroll no-scrollbar">
        <div className="z-40">
          <div className="h-20"></div>
          <Hero />
          <MyProjects />

          <AboutMe />
          <LatestPost />
        </div>
      </div>
    </div>
  );
}
