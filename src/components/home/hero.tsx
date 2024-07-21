"use client";
import React from "react";
import RotateWord from "../framer/rotate-word";
import Image from "next/image";
import { TypeWord } from "../framer/type-word";
import { MoveIntoView } from "../framer/move-into-view";
import { FaGlobeAmericas } from "react-icons/fa";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { GoDownload } from "react-icons/go";
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
              <div className="h-10"></div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="text-muted-foreground text-lg md:text-3xl" // Increased font size
              >
                |
              </motion.span>
            </div>

            <div className="flex flex-col text-wrap font-bold md:text-7xl text-6xl">
              <div className="flex flex-row gap-4.5">
                {" "}
                <div className="">A Full Stack Developer</div>
              </div>
              <div className="px-3 flex items-center gap-3">
                <span className="font-bold ">+</span>
                <RotateWord
                  words={["Designer", "Creator", "Blogger", "Content Creator"]}
                  className="text-4xl md:text-6xl text-nowrap"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-between">
            <div className="flex rounded-2xl bg-accent px-3 ">
              <div className="flex items-center gap-3 text-base text-primary ">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <FaGlobeAmericas className=""></FaGlobeAmericas>
                </motion.div>
                <span className="hover:gradient-text font-mono font-bold transition-all duration-200 ease-in">
                  India
                </span>
              </div>
            </div>
            <div className="gap-4  text-base hidden md:flex">
              {" "}
              {/* Adjusted font size if necessary */}
              <Button className="md:p-6 md:text-xl rounded-xl font-semibold text-muted">
                Get in Touch
              </Button>{" "}
              {/* Increased padding */}
              <Button
                variant={"outline"}
                className="md:p-6 flex gap-2 md:text-xl roudned-xl font-semibold"
              >
                Resume
                <GoDownload />
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
          className="hidden rounded-full shadow-xl overflow-hidden w-[270px] h-[270px] md:block" // Increased size
          src="/Profile.jpg"
          width={300} // Increased size
          height={300} // Increased size
          alt="image"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
