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
import { Marquee } from "@/components/ui/marquee";
import { FaReact } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
export default function HomePage() {
  return (
    <div className=" flex justify-center ">
      <div className="absolute -z-50 bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      <div className=" container absolute z-10  flex  flex-col  sm:min-h-screen overflow-y-scroll no-scrollbar">
        <div className="z-40">
          <div className="h-20"></div>
          <Hero />
          <MyProjects />

          <AboutMe />
          <LatestPost />

          <div className="absolute -z-50 left-auto right-0 bottom-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[70%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
        </div>
      </div>
    </div>
  );
}
