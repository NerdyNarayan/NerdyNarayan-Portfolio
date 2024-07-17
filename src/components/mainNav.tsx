"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsBrilliance } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbAtomOff } from "react-icons/tb";

import MoveIntoView from "./framer/move-into-view";
import { ModeToggle } from "./theme-button";

export default function MainNav() {
  return (
    <MoveIntoView up={true}>
      <div className="   sticky mt-4   flex  flex-row items-center justify-between   pb-4 border-b-2  ">
        <motion.div whileHover={{ scale: 1.1 }} className="flex">
          <Link href="/" className="flex items-center gap-1 text-xl font-bold">
            <TbAtomOff className="text-2xl" />
            <div>Nerdy Narayan</div>
          </Link>
        </motion.div>
        <div className="hidden text-md items-center justify-evenly gap-8 sm:flex">
          <div>Blog</div>
          <div>Projects</div>
          <div>Guides</div>
          <div>About</div>
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
  );
}
