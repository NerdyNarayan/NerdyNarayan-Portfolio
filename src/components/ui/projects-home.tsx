import React from "react";
import Image from "next/image";
import { Card, CardTitle } from "./card";
import Link from "next/link";
const ProjectCardHome = () => {
  return (
    <Link href="./">
      <Card className="  flex flex-col   bg-card mt-4   rounded-2xl   pt-8  shadow-xl">
        <div className="relative ">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-2xl"></div>
          <Image
            src="/Profile.jpg"
            alt="Project cover image"
            width={400}
            height={400}
            className="z-0 rounded-2xl w-[500px] h-[300px] rounded-t-none"
          />
          <CardTitle className=" px-2 absolute bottom-16 left-2  text-xl  text-white">
            Project
          </CardTitle>
          <div className="absolute bottom-0 md:bottom-1 left-2 text-white/[0.8] mb-2 px-2 ">
            Lorem ipsum, dolor sit amet consectetur elit. Suscipit odit quisquam
            illo
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCardHome;
