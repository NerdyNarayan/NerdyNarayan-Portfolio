"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsBrilliance } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbAtomOff } from "react-icons/tb";

import { cn } from "@/lib/utils";
import { useActiveNav } from "@/hooks/useActiveNav";

import { MoveIntoView } from "../framer/move-into-view";
import { ModeToggle } from "../ui/theme-button";

import SiteNav from "./site-nav";
import SiteMenu from "./site-menu";
export default function MainNav() {
  return (
    <div className=" flex justify-center">
      <div className="fixed z-[100]  flex items-center  justify-center">
        <MoveIntoView up={true}>
          <div className="backdrop-blur-xl   supports-[backdrop-blur]   border border-black/10 dark:border-white/10 shadow-2xl mt-4   flex  flex-row items-center justify-between p-4 pt-1 pb-1 rounded-2xl  ">
            <div className="flex">
              <Link
                className="flex  items-center gap-1 text-xl mr-24 font-bold"
                href="/"
              >
                <TbAtomOff className="text-2xl" />
                <div className="text-nowrap">Nerdy Narayan</div>
              </Link>
            </div>
            <SiteNav />
            <div className="flex gap-3">
              <ModeToggle />

              <BsBrilliance className="mt-1.5 text-2xl" />
              <div className="fle x items-center justify-center sm:hidden">
                <SiteMenu />
              </div>
            </div>
          </div>
        </MoveIntoView>
      </div>
    </div>
  );
}
