import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_FILE_PATH = resolve(ROOT_DIR, "src", "db", "seed", "posts.json");

export class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const fileContent = await readFile(JSON_FILE_PATH, "utf-8");
    const parsedJson = JSON.parse(fileContent);
    const { posts } = parsedJson;
    return posts;
  }

  async FindAllPublic(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts.filter((post) => post.published);
  }
  async FindById(id: string): Promise<PostModel | null> {
    const posts = await this.FindAllPublic();
    const post = posts.find((post) => post.id === id) || null;
    return post;
  }
  async FindBySlug(slug: string): Promise<PostModel | null> {
    const posts = await this.FindAllPublic();
    const post = posts.find((post) => post.slug === slug) || null;
    return post;
  }
}
