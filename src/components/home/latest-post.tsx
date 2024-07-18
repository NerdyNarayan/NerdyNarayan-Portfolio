import { posts } from "#site/content";
import Link from "next/link";
import React from "react";
import { PostItem } from "./post-items";
import { Button } from "../ui/button";

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
          <Button className="mt-4 bg-primary-foreground text-primary flex mx-auto">
            View More
          </Button>
        </Link>
      </div>
    </>
  );
};

export default LatestPost;
