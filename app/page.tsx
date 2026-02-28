import { Features } from '@/components/features';
import { Footer } from '@/components/footer';
import { GetStarted } from '@/components/get-started';
import { Hero } from '@/components/hero';

export default function HomePage() {
  return (
    <>
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-6 py-10 sm:py-14">
        <Hero />
        <Features />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
