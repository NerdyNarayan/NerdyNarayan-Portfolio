import React from "react";
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
  SiDrizzle,
} from "react-icons/si";

import { Marquee } from "../ui/marquee";
import { Card } from "../ui/card";
const TechStack = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <Marquee
        className="" // pass class to change gap or speed
        direction="left"
        fade={true}
        innerClassName="" // pass class to change gap or speed
        pauseOnHover={true}
        reverse={false}
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
        className="" // pass class to change gap or speed
        direction="left"
        fade={true}
        innerClassName="" // pass class to change gap or speed
        pauseOnHover={true}
        reverse={true}
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
  );
};

export default TechStack;
