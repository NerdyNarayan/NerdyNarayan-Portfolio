import React from "react";

import { BentoCard, BentoGrid } from "../ui/Bento";
import { MoveIntoView, MoveIntoVisible } from "../framer/move-into-view";

import Connection from "./connect";
import TechStack from "./tech-stack";

const AboutMe = () => {
  const features = [
    {
      name: "About Me",
      description: "i am a fullstack dev",
      href: "/about",
      cta: "Learn More",
      background: <div>Learn about me</div>,
      className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-1",
    },

    {
      name: "Stack",
      description: "languages and tools i am familiar with",
      href: "/about",
      cta: "Learn more about me",
      background: <TechStack />,
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-1",

      // className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
    },
    {
      name: "ToolBox",
      description: "All the tools i use",
      href: "/tools",
      background: <div>My tools</div>,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-2",
      cta: "Check toolbox",
    },

    {
      name: "Connect",
      description: "My social links",
      href: "/",
      background: <Connection />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-2",
      cta: "Connect",
    },
  ];

  return (
    <MoveIntoVisible amount={0.4}>
      <MoveIntoView down={true}>
        <BentoGrid className="mt-10 lg-grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
        {/* <div className="flex flex-col justify-center py-4 text-2xl font-extrabold text-primary"> */}
        {/*   <CenterText> About Me</CenterText> */}
        {/*   <div className="grid gap-4" /> */}
        {/**/}
        {/* <BentoGrid className="w-full">
            <BentoGridItem className=" row-span-2 md:col-span-1 md:row-span-2   ">
              <Card className=" ">
                <CardHeader>Learn more about me</CardHeader>
              </Card>
            </BentoGridItem>
            <BentoGridItem className=" md:col-span-3 ">
              <TechStack />
            </BentoGridItem>
            <BentoGridItem className="">
              <Card className="">
                <CardHeader>ToolBox</CardHeader>
              </Card>
            </BentoGridItem>{" "}
            <BentoGridItem className="row-span-1 md:col-span-2  ">
              <Card className="">
                <CardHeader> My socials</CardHeader>
              </Card>
            </BentoGridItem>
          </BentoGrid> */}
      </MoveIntoView>
    </MoveIntoVisible>
  );
};

export default AboutMe;
