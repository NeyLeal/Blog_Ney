import { PostModel } from "@/models/post/post-model";

export interface PostRepository {
  FindAll(): Promise<PostModel[]>;
  FindById(id: string): Promise<PostModel | null>;
}
