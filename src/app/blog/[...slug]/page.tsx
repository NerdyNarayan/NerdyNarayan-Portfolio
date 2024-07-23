import React from "react";
import Image from "next/image";
import { posts, Post } from "#site/content";
import { Mdx } from "@/components/mdx-components";
import Link from "next/link";

async function getPost(params: { params: { slug: string } }) {
  const post = posts.find(
    (post: Post) => post.slug.split("/").pop() === params.params.slug[0],
  );
  return post;
}
export default async function page(params: { params: { slug: string } }) {
  const post = await getPost(params);
  return (
    <div className="relative">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[10%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      <div className="absolute hidden md:flex bottom-auto right-auto left-0  h-[600] w-[500px] -translate-x-[30%] translate-y-[100%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>

      <article className="pt-20 container gap-6 flex flex-col py-6 prose dark:prose-invert max-w-4xl mx-auto">
        <div className="relative">
          <img
            className="w-full min-h-40 z-20  "
            src={post?.banner ?? ""}
            alt={post?.title}
            width={400}
            height={400}
          />
        </div>
        <div className="md:text-4xl text-2xl z-20 text-wrap font-bold ">
          {post?.title}
        </div>
        <div className=" z-20">
          <Mdx code={post?.body ?? ""} components={{}} />
        </div>
        <div className="border-t py-4 justify-end flex">
          <Link
            href={"/blog"}
            className=" text-2xl bg-card px-2 py-2 border hover:bg-card-foreground/20"
          >
            Read more blogs
          </Link>
        </div>
      </article>
    </div>
  );
}
