import MoveIntoView from "../framer/move-into-view";
import ProjectCardHome from "../ui/projects-home";
import { Button } from "../ui/button";

import React from "react";

const MyProjects = () => {
  return (
    <MoveIntoView down={true}>
      <div className="mt-10 flex flex-col ">
        <div className="flex justify-center py-4 text-2xl font-extrabold text-primary">
          My Projects
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <ProjectCardHome />
          <ProjectCardHome />
        </div>
        <div className="flex items-center justify-center ">
          <Button className="mt-4 py-2 px-4 mb-10" variant={"outline"}>
            View All
          </Button>
        </div>
      </div>
    </MoveIntoView>
  );
};

export default MyProjects;
