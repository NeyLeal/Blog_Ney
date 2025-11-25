import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function FeaturedPost() {
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        url="#"
        src="/images/bryen_0.png"
        title="Titulo do Post"
      ></PostCoverImage>
      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-slate-600 block text-sm/tight"
          dateTime="2025-04-20"
        >
          20/04/2025 10:00
        </time>
        <PostHeading as="h1" url="#">
          Lorem ipsum dolor sit amet consectetur
        </PostHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          consequuntur ut exercitationem ab! Placeat pariatur nihil dolorem quis
          sunt inventore ipsa, officia facilis quae ullam saepe in impedit.
          Ullam, soluta!
        </p>
      </div>
    </section>
  );
}
