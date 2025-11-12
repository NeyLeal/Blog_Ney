import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
          <Image
            className="group-hover:scale-105 transition"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Titulo do post"
            priority
          />
        </Link>
        <div className="flex flex-col gap-4">
          <time
            className="text-slate-600 block text-sm/tight"
            dateTime="2025-04-20"
          >
            20/04/2025 10:00
          </time>
          <h1 className="text-2xl/tight font-extrabold mb-4 sm:text-4xl">
            <Link href="#">Lorem ipsum dolor sit amet consectetur</Link>
          </h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          consequuntur ut exercitationem ab! Placeat pariatur nihil dolorem quis
          sunt inventore ipsa, officia facilis quae ullam saepe in impedit.
          Ullam, soluta!
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <h1 className="text-6xl font-bold text-center py-8">Footer</h1>
      </footer>
    </Container>
  );
}
