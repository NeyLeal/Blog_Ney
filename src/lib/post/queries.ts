import { postRepository } from "@/repositories/post";
import { notFound } from "next/navigation";
import { cache } from "react";

export const FindAllPublicPostsCached = cache(
  async () => await postRepository.FindAllPublic()
);

export const FindPostBySlugCached = cache(async (slug: string) => {
  const post = await postRepository.FindBySlug(slug).catch(() => undefined);
  if (!post) notFound();
  return post;
});
