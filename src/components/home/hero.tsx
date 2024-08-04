"use client";
import React from "react";
import Image from "next/image";
import { FaGlobeAmericas } from "react-icons/fa";
import { motion } from "framer-motion";
import { GoDownload } from "react-icons/go";

import RotateWord from "../framer/rotate-word";
import { TypeWord } from "../framer/type-word";
import { MoveIntoView } from "../framer/move-into-view";
import { Button, FancyButton } from "../ui/button";

const Hero = () => {
  const variant = {
    hidden: {
      opacity: 0,
      filter: "blur(15px)", // Increased blur for hidden state
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
    <div className="pt-9 mt-6 flex justify-center sm:justify-between mb-10">
      <MoveIntoView left={true}>
        <div className="">
          <div className="flex text-pretty flex-col">
            <div className="mb-7.5 flex">
              <span className="font-sans text-muted-foreground text-lg md:text-3xl">
                <TypeWord />
              </span>
              <div className="h-10" />
              <motion.span
                animate={{ opacity: 1 }}
                className="text-muted-foreground text-lg md:text-3xl" // Increased font size
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                |
              </motion.span>
            </div>

            <div className="flex flex-col text-wrap font-bold md:text-7xl text-6xl">
              <div className="flex flex-row gap-4.5">
                {" "}
                <div className="">A Full Stack Developer</div>
              </div>
              <div className="px-3  flex items-center gap-3">
                <span className=" items-center font-bold ">+</span>
                <RotateWord
                  className="items-center flex text-4xl md:text-[60px]  leading-snug text-nowrap"
                  words={["Designer", "Creator", "Blogger", "Content Creator"]}
                />
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-between">
            <div className="flex items-center gap-3 ">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <FaGlobeAmericas className="" />
              </motion.div>
              <span className="hover:gradient-text font-mono font-bold transition-all duration-200 ease-in">
                India
              </span>
            </div>
            <div className="gap-4  text-base hidden md:flex">
              <FancyButton className="md:p-6 flex gap-2 bg-primary/80 text-primary-foreground hover:bg-background hover:text-primary transition-all duration-200 md:text-xl roudned-xl font-semibold">
                Get in Touch
              </FancyButton>{" "}
              <FancyButton
                Icon={GoDownload}
                className="md:p-6 flex gap-2 md:text-xl roudned-xl font-semibold"
                iconPlacement="right"
                variant={"expandIcon"}
              >
                Resume
              </FancyButton>
            </div>
          </div>
        </div>
      </MoveIntoView>
      <motion.div
        animate="visible"
        className=""
        initial="hidden"
        variants={variant}
      >
        <Image
          alt="image"
          className="hidden rounded-full shadow-xl overflow-hidden w-[270px] h-[270px] md:block" // Increased size
          height={300} // Increased size
          src="/Profile.jpg"
          width={300} // Increased size
        />
      </motion.div>
    </div>
  );
};

export default Hero;
