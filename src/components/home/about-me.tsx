"use client";
import React from "react";
import { CalendarIcon, Icon } from "lucide-react";
import { StackIcon } from "@radix-ui/react-icons";
import { Description } from "@radix-ui/react-dialog";

import { BentoGrid, BentoCard } from "@/components/ui/Bento";
import { Card, CardHeader } from "@/components/ui/card";

import { MoveIntoView, MoveIntoVisible } from "../framer/move-into-view";
import CenterText from "../ui/center-text";

import TechStack from "./tech-stack";

const AboutMe = () => {
  const features = [];

  return (
    <MoveIntoVisible amount={0.4}>
      <MoveIntoView down={true}>
        <div className="flex flex-col justify-center py-4 text-2xl font-extrabold text-primary">
          <CenterText> About Me</CenterText>
          <div className="grid gap-4" />
          <BentoGrid>
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>

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
        </div>
      </MoveIntoView>
    </MoveIntoVisible>
  );
};

export default AboutMe;
