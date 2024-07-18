import Link from "next/link";
import Image from "next/image";
import posts from "#site/content";
import { Button } from "../ui/button";
interface PostItemProps {
  slug: string;
  title: string;
  description: string;
  Banner: string;
}

export function PostItem({ slug, title, description, Banner }: PostItemProps) {
  const post = posts;
  return (
    <div className="flex flex-col md:flex-row flex-1 gap-2 border-border border-b py-3">
      <div className="flex justify-center items-center ">
        <Image
          className="float-left"
          src={Banner}
          alt={title}
          width={400}
          objectFit="cover"
          height={400}
        />
      </div>
      <article className="flex flex-grow flex-col gap-2 border-border border-b py-3 bg-secondary rounded-lg px-4">
        <div className="hover:text-lavender font-bold text-2xl transition-all duration-100 hover:underline inline-block">
          <Link href={`/${slug}`}>{title}</Link>
        </div>
        <div className="max-w-none text-muted-foreground">{description}</div>
        <Button className="flex ">
          <Link href={`/${slug}`}>Read more</Link>
        </Button>
      </article>
    </div>
  );
}
