import { postRepository } from "@/repositories/post";
import { cache } from "react";

export const FindAllPublicPosts = cache(
  async () => await postRepository.FindAllPublic()
);
