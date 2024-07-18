import React from "react";
import Image from "next/image";
import { posts, Post } from "#site/content";
import { Mdx } from "@/components/mdx-components";
import Link from "next/link";

async function getPost(params: { params: { slug: string } }) {
  const post = posts.find(
    (post: Post) => post.slug.split("/").pop() === params.params.slug[0]
  );
  return post;
}
export default async function page(params: { params: { slug: string } }) {
  const post = await getPost(params);
  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <div className="">
        <img
          className="w-full h-40 "
          src={post?.banner ?? ""}
          alt={post?.title}
          width={400}
          height={400}
        />
      </div>

      <div className=" ">
        <Mdx code={post?.body ?? ""} components={{}} />
      </div>
      <div className="border-t py-4 justify-end flex">
        <Link
          href={"/blog"}
          className=" text-2xl text-wrap overflow-hidden rounded-lg text-text bg-lavender/80 py-3 px-6 hover:bg-lavender/100"
        >
          Read more blogs
        </Link>
        ?? ""
      </div>
    </article>
  );
}
