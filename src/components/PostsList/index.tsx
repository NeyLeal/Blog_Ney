import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export async function PostsList() {
  const posts = await postRepository.FindAll();
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostCoverImage
              url={`/post/${post.slug}`}
              src={post.coverImageUrl}
              title={post.title}
            ></PostCoverImage>
            <div className="flex flex-col gap-4 sm:justify-center">
              <time
                className="text-slate-600 block text-sm/tight"
                dateTime={post.createdAt}
              >
                {post.createdAt}
              </time>
              <PostHeading as="h2" url="#">
                {post.title}
              </PostHeading>
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
