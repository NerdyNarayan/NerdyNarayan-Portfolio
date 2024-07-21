"use client";
import Link from "next/link";
import Image from "next/image";
import posts from "#site/content";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
interface PostItemProps {
  slug: string;
  title: string;
  description: string;
  Banner: string;
  date: string;
  tags: string[];
}

export function PostItem({
  slug,
  date,
  title,
  description,
  Banner,
  tags,
}: PostItemProps) {
  const post = posts;
  return (
    <Link
      href={`/${slug}`}
      className="w-full mx-auto  border-b mb-4 hover:opacity-80 "
    >
      <div className=" grid md:grid-cols-4 w-full mb-5  ">
        <div className="flex col-span-3 flex-col  gap-2 transition-all duration-200">
          <div className="flex font-mono text-[#a6adc8] text-xl gap-4">
            <div className="text-sm md:text-lg"> {date.split("T", 1)}</div>
            {tags?.map((tag, index) => {
              return (
                <div
                  key={index}
                  className="flex transparent text-sm items-center md:text-lg bg-[#cba6f7]/90
                  hover:bg-[#cba6f7]/80 text-primary-foreground mr-2 rounded-xl
                  px-2 shadow"
                >
                  {tag}
                </div>
              );
            })}
          </div>

          <div className="flex md:text-3xl text-2xl font-bold text-wrap  ">
            {title}
          </div>
          <div className="flex text-xl text-[#a6adc8]">{description}</div>
        </div>
        <Image
          src={Banner}
          alt={title}
          width={300}
          height={300}
          className="col-span-1 mx-auto max-w-[300px] hidden md:flex "
        />
      </div>
    </Link>
  );
}
// <div className="flex flex-col md:flex-row flex-1 gap-2 border-border border-b py-3">
//   <div className="flex justify-center items-center ">
//     <Image
//       className="float-left"
//       src={Banner}
//       alt={title}
//       width={400}
//       objectFit="cover"
//       height={400}
//     />
//   </div>
//   <article className="flex flex-grow flex-col gap-2 border-border border-b py-3 bg-secondary rounded-lg px-4">
//     <div className="hover:text-lavender font-bold text-2xl transition-all duration-100 hover:underline inline-block">
//       <Link href={`/${slug}`}>{title}</Link>
//     </div>
//     <div className="max-w-none text-muted-foreground">{description}</div>
//     <Button className="flex ">
//       <Link href={`/${slug}`}>Read more</Link>
//     </Button>
//   </article>
// </div>
