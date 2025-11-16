import Link from "next/link";
import Image from "next/image";
import { Props } from "next/script";

type PostCoverImageProps = {
  url: string;
  src: string;
  title?: string;
};

export function PostCoverImage({ url, src, title = "" }: PostCoverImageProps) {
  return (
    <Link className="w-full h-full overflow-hidden rounded-xl" href={url}>
      <Image
        className="w-full h-full object-cover object-center group-hover:scale-105 transition"
        src={src}
        width={1200}
        height={720}
        alt={title}
        priority
      />
    </Link>
  );
}
