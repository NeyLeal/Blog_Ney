import { FindAllPublicPostsCached } from "@/lib/post/queries";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export async function FeaturedPost() {
  const posts = await FindAllPublicPostsCached();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        url={postLink}
        src={post.coverImageUrl}
        title={post.title}
      ></PostCoverImage>
      <PostSummary
        postLink={postLink}
        postHeading="h2"
        createdAt={post.createdAt}
        title={post.title}
        excerpt={post.excerpt}
      ></PostSummary>
    </section>
  );
}
