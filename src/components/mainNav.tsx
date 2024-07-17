"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsBrilliance } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbAtomOff } from "react-icons/tb";

import MoveIntoView from "./framer/move-into-view";
import { ModeToggle } from "./ui/theme-button";

export default function MainNav() {
  return (
    <div className="fixed z-10 md:translate-x-[20%] -translate-x-[5%] flex items-center  justify-center">
      <MoveIntoView up={true}>
        <div className="   backdrop-blur-xl   supports-[backdrop-blur]: left-auto  border border-black/10 dark:border-white/10 shadow-2xl mt-4   flex  flex-row items-center justify-between p-4 pt-1 pb-1 rounded-2xl  ">
          <motion.div whileHover={{ scale: 1.05 }} className="flex">
            <Link
              href="/"
              className="flex  items-center gap-1 text-xl mr-24 font-bold"
            >
              <TbAtomOff className="text-2xl" />
              <div className="text-nowrap">Nerdy Narayan</div>
            </Link>
          </motion.div>
          <div className="hidden mr-20 text-md items-center font-semibold transition-all duration-200 justify-evenly gap-5 sm:flex">
            <div className="hover:text-primary/[0.8]">Blog</div>
            <div className="hover:text-primary/[0.8]">Projects</div>
            <div className="hover:text-primary/[0.8]">Guides</div>
            <div className="hover:text-primary/[0.8]">About</div>
          </div>
          <div className="flex gap-3">
            <ModeToggle></ModeToggle>

            <BsBrilliance className="mt-1.5 text-2xl" />
            <div className="fle x items-center justify-center sm:hidden">
              <RxHamburgerMenu className="mt-1.5 text-2xl" />
            </div>
          </div>
        </div>
      </MoveIntoView>
    </div>
  );
}
