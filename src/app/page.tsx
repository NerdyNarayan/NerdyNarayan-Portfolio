import React from "react";

import MainNav from "../components/mainNav";
import Hero from "./home/hero";
import MyProjects from "./home/my-projects";
import AboutMe from "./home/about-me";
import Image from "next/image";
import { posts } from "#site/content";
import { Mdx, MDXContent } from "@/components/mdx-components";
import { Callout } from "@/components/callout";
export default function HomePage() {
  return (
    <div className="mx-auto flex justify-center">
      <div className=" h-full w-full bg-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_300%)]"></div>
      </div>

      <div className=" container absolute z-10  flex max-w-5xl flex-col  sm:min-h-screen overflow-y-scroll no-scrollbar">
        <div className="z-40">
          <MainNav />
          <div className="h-20"></div>
          <Hero />
          <MyProjects />

          <AboutMe />
          <div className="max-w-2xl mx-auto">
            {posts.map((post) => (
              <div>
                <h1>{post.title}</h1>
                <Image
                  src={post.banner}
                  alt={post.title}
                  height={100}
                  width={100}
                />
                <Mdx code={post.body} components={{ Callout }}></Mdx>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
