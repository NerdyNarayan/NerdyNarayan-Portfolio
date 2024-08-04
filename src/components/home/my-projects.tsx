import React from "react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { MoveIntoVisible } from "../framer/move-into-view";
import ProjectCardHome from "../ui/projects-home";
import { FancyButton } from "../ui/button";
import CenterText from "../ui/center-text";

const MyProjects = () => {
  return (
    <MoveIntoVisible amount={0.3}>
      <div className="mt-10   flex flex-col ">
        <CenterText>My Projects</CenterText>
        <div className="mt-10 flex flex-col items-center justify-center gap-10  md:flex-row">
          <ProjectCardHome /> <ProjectCardHome className="hidden sm:flex" />{" "}
          <ProjectCardHome className="hidden md:flex" />
        </div>
        <Link
          className="flex mt-10 items-center justify-center "
          href={"/projects"}
        >
          <FancyButton
            Icon={ArrowRightIcon}
            iconPlacement="right"
            variant={"expandIcon"}
          >
            View All
          </FancyButton>
        </Link>
      </div>
    </MoveIntoVisible>
  );
};

export default MyProjects;
