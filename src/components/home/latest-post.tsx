import { posts } from "#site/content";
import Link from "next/link";
import React from "react";
import { PostItem } from "./post-items";

const LatestPost = () => {
  return (
    <>
      <div className="flex justify-center py-4 text-2xl font-extrabold text-primary">
        Latest Posts{" "}
      </div>
      <div className="flex flex-col gap-2 py-3">
        {posts.map((post, index) => {
          return (
            <PostItem
              key={index}
              slug={post.slug}
              title={post.title}
              description={post?.description ?? ""}
              Banner={post.banner}
            />
          );
        })}

        <Link href="/blog">
          <div className="hidden md:flex items-center justify-center gap-2 bg-primary/80  py-3 hover:bg-primary/40 transition-all duration-100 ">
            View All my blogs
          </div>
        </Link>
      </div>
    </>
  );
};

export default LatestPost;
