import { FindPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import { formatDateTime } from "@/utils/format-datetime";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await FindPostBySlugCached(slug);
  return (
    <article className="mb-16">
      <header>
        <Image
          src={post.coverImageUrl}
          width={1200}
          height={720}
          alt={post.title}
        />
        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>
        <p>
          {post.author} | {formatDateTime(post.createdAt)}
        </p>
      </header>
      <p>{post.excerpt}</p>
    </article>
  );
}
