"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/Bento";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProjectCardHome from "@/components/ui/projects-home";
import { motion, useInView } from "framer-motion";
import React from "react";
import { MoveIntoView, MoveIntoVisible } from "../framer/move-into-view";
import CenterText from "../ui/center-text";

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
              <Card className="">
                <CardHeader>Stack</CardHeader>
              </Card>
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
