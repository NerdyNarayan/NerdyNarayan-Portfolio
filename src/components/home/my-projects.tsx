import { MoveIntoView, MoveIntoVisible } from "../framer/move-into-view";
import ProjectCardHome from "../ui/projects-home";
import { Button } from "../ui/button";

import CenterText from "../ui/center-text";
import React from "react";

const MyProjects = () => {
  const variant = {
    intiial: {
      y: 40,
      opacity: 0,
    },
    final: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <MoveIntoVisible amount={0.3}>
      <div className="mt-10 flex flex-col ">
        <CenterText>My Projects</CenterText>
        <div className="flex flex-col items-center justify-center gap-10  md:flex-row">
          <ProjectCardHome /> <ProjectCardHome />
          <ProjectCardHome />
        </div>
        <div className="flex items-center justify-center ">
          <Button className="mt-4 py-2 px-4 mb-10" variant={"outline"}>
            View All
          </Button>
        </div>
      </div>
    </MoveIntoVisible>
  );
};

export default MyProjects;
