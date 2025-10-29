import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";


export default async function Home() {
  
  return (
    <Container>
      <Header />
      <Suspense fallback={<SpinLoader/>}>
        <PostsList />
      </Suspense>
      <footer>
        <h1 className="text-6xl font-bold text-center py-8">Footer</h1>
      </footer>
    </Container>

  );
}
