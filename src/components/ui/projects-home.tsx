"use client";
import React from "react";
import Image from "next/image";
import { Card, CardTitle } from "./card";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
const ProjectCardHome = () => {
  return (
    <Link href="./">
      <motion.div transition={{ duration: 0.1 }} whileHover={{ scale: 1.05 }}>
        <Card className="  flex flex-col border-[#45475a]   mt-4   rounded-2xl     shadow-xl">
          <div className=" h-8 bg-[#1e1e2e]/50 rounded-t-2xl">
            <GoArrowUpRight className=" ml-auto text-2xl mr-3 mt-1 text-[#cba6f7]" />
          </div>
          <div className="relative ">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-2xl"></div>
            <Image
              src="/image.png"
              alt="Project cover image"
              width={400}
              height={400}
              className=" rounded-2xl w-[500px] h-[250px] rounded-t-none"
            />
            <CardTitle className=" px-2 absolute bottom-16 left-2  text-xl  text-white">
              Project
            </CardTitle>
            <div className="absolute bottom-0 md:bottom-1 left-2 text-white/[0.8] mb-2 px-2 ">
              Lorem ipsum, dolor sit amet consectetur elit. Suscipit odit
              quisquam illo
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ProjectCardHome;
