"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import { cn } from "@/lib/utils";

import { Card, CardDescription, CardTitle } from "./card";
import { Button } from "./button";
const ProjectCardHome = ({ className }: { className?: string }) => {
  return (
    <Link href="./">
      <motion.div
        className={cn(
          "group rounded-xl bg-gradient-to-r   from-purple-100 via-purple-400 to-purple-100 p-[1px]    ",
          className,
        )}
        transition={{ duration: 0.1 }}
        whileHover={{ scale: 1.01 }}
      >
        <Card className="group  ">
          <Image
            alt="Project cover image"
            className="  rounded-lg   shadow-xl  transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            height={200}
            src="/linkohub-project.png"
            width={400}
          />

          <CardDescription className="p-4">
            <Link href="#">
              <CardTitle className="flex justify-between items-center text-lg dark:text-primary  ">
                <div className="bg-background  px-2 rounded-lg hover:bg-red-100/80">
                  LinkoHub
                </div>
                <div className="gap-2 flex ">
                  <Button
                    className="py-0  text-xl bg-[#1e1e2e] "
                    variant={"destructive"}
                  >
                    <FaGithub />
                  </Button>
                  <Button
                    Icon={MdOpenInNew}
                    className="bg-white text-[15px]  text-black border"
                    iconPlacement="right"
                    variant={"expandIcon"}
                  >
                    Live
                  </Button>
                </div>
              </CardTitle>
            </Link>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              [Demo] Website to manage all my links in one place
            </p>
            <div className="flex flex-row gap-2">
              <div className="mt-3 inline-flex items-center text-sm justify-center rounded-lg bg-purple-100 px-2  text-slate-700 ">
                Typescript
              </div>
              <div className="mt-3 inline-flex items-center text-sm justify-center rounded-lg bg-emerald-100 px-2  text-slate-700 ">
                NextJs
              </div>
            </div>
          </CardDescription>
        </Card>

        {/* <Card className="  flex flex-col border-[#45475a]   mt-4   rounded-2xl     shadow-xl">
          <div className=" h-8 bg-[#1e1e2e]/50 rounded-t-2xl">
            <GoArrowUpRight className=" ml-auto text-2xl mr-3 mt-1 text-[#cba6f7]" />
          </div>
          <div className="relative ">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-2xl" />
            <Image
              alt="Project cover image"
              className=" rounded-2xl w-[500px] h-[250px] rounded-t-none"
              height={400}
              src="/linkohub-project.png"
              width={400}
            />
            <CardTitle className=" px-2 absolute bottom-16 left-2  text-xl  text-white">
              Project
            </CardTitle>
            <div className="absolute bottom-0 md:bottom-1 left-2 text-white/[0.8] mb-2 px-2 ">
              Lorem ipsum, dolor sit amet consectetur elit. Suscipit odit
              quisquam illo
            </div>
          </div>
        </Card> */}
      </motion.div>
    </Link>
  );
};

export default ProjectCardHome;
