import { BentoGrid, BentoGridItem } from "@/components/ui/Bento";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProjectCardHome from "@/components/ui/projects-home";
import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div className="flex flex-col justify-center py-4 text-2xl font-extrabold text-primary">
        <div className="flex justify-center mb-10">About me</div>
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
    </div>
  );
};

export default AboutMe;
