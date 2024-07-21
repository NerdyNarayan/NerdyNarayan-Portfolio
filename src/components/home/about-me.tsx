"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/Bento";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProjectCardHome from "@/components/ui/projects-home";
import { motion, useInView } from "framer-motion";
import React from "react";
import { MoveIntoView, MoveIntoVisible } from "../framer/move-into-view";
import CenterText from "../ui/center-text";
import { Marquee } from "../ui/marquee";
import { FaReact, FaCss3Alt, FaGitAlt, FaNodeJs, FaSass } from "react-icons/fa";
import {
  RiNextjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
  RiMarkdownFill,
} from "react-icons/ri";
import {
  SiPython,
  SiHtml5,
  SiTypescript,
  SiPostgresql,
  SiVite,
  SiRedux,
} from "react-icons/si";
import { SiDrizzle } from "react-icons/si";
const AboutMe = () => {
  return (
    <MoveIntoVisible amount={0.4}>
      <MoveIntoView down={true}>
        <div className="flex flex-col justify-center py-4 text-2xl font-extrabold text-primary">
          <CenterText> About Me</CenterText>
          <div className="grid gap-4"></div>
          <BentoGrid className="w-full">
            <BentoGridItem className="md:row-span-2 ">
              <Card className="">
                <CardHeader>Learn more about me</CardHeader>
              </Card>
            </BentoGridItem>
            <BentoGridItem className="md:col-span-3 ">
              <div className="flex flex-col gap-4 ">
                <Marquee
                  fade={true}
                  direction="left"
                  reverse={false}
                  pauseOnHover={true}
                  className="" // pass class to change gap or speed
                  innerClassName="" // pass class to change gap or speed
                >
                  <Card className="flex  w-32 items-center justify-center h-24">
                    <FaReact className="text-6xl " />
                  </Card>{" "}
                  <Card className="flex  w-32 items-center justify-center h-24">
                    <RiNextjsFill className="text-6xl " />
                  </Card>{" "}
                  <Card className="flex  w-32 items-center justify-center h-24">
                    <SiPython className="text-6xl " />
                  </Card>{" "}
                  <Card className="flex  w-32 items-center justify-center h-24">
                    <SiHtml5 className="text-6xl " />
                  </Card>{" "}
                  <Card className="flex  w-32 items-center justify-center h-24">
                    <FaCss3Alt className="text-6xl " />
                  </Card>{" "}
                  <Card className="flex  w-32 items-center justify-center h-24">
                    <RiJavascriptFill className="text-6xl " />
                  </Card>{" "}
                  <Card className="flex  w-32 items-center justify-center h-24">
                    <RiTailwindCssFill className="text-6xl " />
                  </Card>{" "}
                  <Card className="flex  w-32 items-center justify-center h-24">
                    <SiPostgresql className="text-6xl " />
                  </Card>
                  <Card className="flex  w-32 items-center justify-center h-24">
                    <SiTypescript className="text-6xl " />
                  </Card>
                </Marquee>
                <Marquee
                  fade={true}
                  direction="left"
                  reverse={true}
                  pauseOnHover={true}
                  className="" // pass class to change gap or speed
                  innerClassName="" // pass class to change gap or speed
                >
                  <Card className="flex  w-32 items-center justify-center h-24">
                    <SiVite className="text-6xl " />
                  </Card>{" "}
                  <Card className="flex  w-32 items-center justify-center h-24">
                    <RiMarkdownFill className="text-6xl " />
                  </Card>{" "}
                  <Card className="flex  w-32 items-center justify-center h-24">
                    <FaGitAlt className="text-6xl " />
                  </Card>{" "}
                  <Card className="flex  w-32 items-center justify-center h-24">
                    <SiDrizzle className="text-6xl " />
                  </Card>{" "}
                  <Card className="flex  w-32 items-center justify-center h-24">
                    <FaNodeJs className="text-6xl " />
                  </Card>{" "}
                  <Card className="flex  w-32 items-center justify-center h-24">
                    <SiRedux className="text-6xl " />
                  </Card>{" "}
                  <Card className="flex  w-32 items-center justify-center h-24">
                    <FaSass className="text-6xl " />
                  </Card>
                </Marquee>
              </div>
            </BentoGridItem>
            <BentoGridItem className="">
              <Card className="">
                <CardHeader>ToolBox</CardHeader>
              </Card>
            </BentoGridItem>{" "}
            <BentoGridItem className="md:row-span-1 md:col-span-2  ">
              <Card className="">
                <CardHeader> My socials</CardHeader>
              </Card>
            </BentoGridItem>
          </BentoGrid>
        </div>
      </MoveIntoView>
    </MoveIntoVisible>
  );
};

export default AboutMe;
