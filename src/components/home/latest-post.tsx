import Link from "next/link";
import React from "react";
import { ArrowBigLeft, ArrowRightIcon } from "lucide-react";
import { MdOpenInNew } from "react-icons/md";

import { posts } from "#site/content";

import { Button, FancyButton } from "../ui/button";
import { MoveIntoVisible } from "../framer/move-into-view";
import CenterText from "../ui/center-text";

import { PostItem } from "./post-items";

const LatestPost = () => {
  return (
    <MoveIntoVisible amount={0.3}>
      <>
        <CenterText>Latest Posts</CenterText>
        <div className="flex flex-col gap-2 py-3 ">
          {posts.map((post, index) => {
            return (
              <PostItem
                key={index}
                Banner={post.banner}
                date={post.date}
                description={post?.description ?? ""}
                slug={post.slug}
                tags={post.tags}
                title={post.title}
              />
            );
          })}

          <Link className=" mx-auto flex " href="/blog ">
            <FancyButton
              Icon={ArrowRightIcon}
              className=""
              iconPlacement="right"
              variant={"expandIcon"}
            >
              View More
            </FancyButton>
          </Link>
        </div>
      </>
    </MoveIntoVisible>
  );
};

export default LatestPost;
