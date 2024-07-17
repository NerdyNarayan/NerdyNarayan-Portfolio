"use client";
import React from "react";
import RotateWord from "../../components/framer/rotate-word";
import Image from "next/image";
import { TypeWord } from "../../components/framer/type-word";
import MoveIntoView from "../../components/framer/move-into-view";
import { FaGlobeAmericas } from "react-icons/fa";
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
const Hero = () => {
  const variant = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <div className=" pt-6 mt-4 flex justify-center  sm:justify-between">
      <MoveIntoView left={true}>
        <div className="">
          <div className="flex text-pretty flex-col">
            <div className="mb-5">
              <span className=" font-sans  text-muted-foreground text-lg ">
                <TypeWord />
              </span>
            </div>

            <div className="flex flex-col  text-wrap font-bold md:text-5xl text-[34px]">
              <div className="flex flex-row gap-3">
                <div className="">A Full Stack Developer</div>
              </div>
              <div className="px-4 flex items-center gap-2">
                <span className="font-bold ">+</span>
                <RotateWord
                  words={["Designer", "Creator", "Innovator"]}
                  className="text-2xl  md:text-4xl"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-between">
            <div className="inline-block items-center rounded-2xl bg-accent px-2 py-2">
              <div className="flex items-center gap-2 text-sm text-primary">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="flex items-center justify-center text-sm space-x-1.5"
                >
                  <FaGlobeAmericas className=""></FaGlobeAmericas>
                </motion.div>
                <span className="hover:gradient-text font-mono font-bold transition-all duration-200 ease-in">
                  India
                </span>
              </div>
            </div>
            <div className="flex  text-sm md:text-sm">
              <Button className="p-2">Get in Touch</Button>
              <Button variant={"outline"} className="">
                Resume
              </Button>
            </div>
          </div>
        </div>
      </MoveIntoView>

      <motion.div
        className=""
        initial="hidden"
        animate="visible"
        variants={variant}
      >
        <Image
          className="hidden rounded-full overflow-hidden w-[180px] h-[180px]    md:block"
          src="/Profile.jpg"
          objectFit="fill"
          width={200}
          height={200}
          alt="image"
        />
      </motion.div>
    </div>
  );
};
export default Hero;
