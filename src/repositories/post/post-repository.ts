import { PostModel } from "@/models/post/post-model";

export interface PostRepository {
  FindAllPublic(): Promise<PostModel[]>;
  FindById(id: string): Promise<PostModel | null>;
}
