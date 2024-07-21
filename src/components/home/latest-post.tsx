import { posts } from "#site/content";
import Link from "next/link";
import React from "react";
import { PostItem } from "./post-items";
import { Button } from "../ui/button";
import { MoveIntoVisible } from "../framer/move-into-view";
import CenterText from "../ui/center-text";

const LatestPost = () => {
  return (
    <MoveIntoVisible amount={0.3}>
      <>
        <CenterText>Latest Posts</CenterText>
        <div className="flex flex-col gap-2 py-3 ">
          {posts.map((post, index) => {
            return (
              <PostItem
                tags={post.tags}
                date={post.date}
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
    </MoveIntoVisible>
  );
};

export default LatestPost;
