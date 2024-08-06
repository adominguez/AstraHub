
import Hero from '@/app/ui/web/hero';
import About from '@/app/ui/web/about';
import Demo from '@/app/ui/web/demo';
import AstraCharacter from '@/app/ui/astra-lightbulb/astra';
import { sourceSans } from '@/app/ui/fonts'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-hero relative items-center text-white">
      <Hero />
      <About />
      <Demo />
    </main>
  );
}
