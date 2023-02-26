import Blog from '@/components/Blog';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';

export default function Home() {
  return (
    <main className="font-mono">
      <Hero />
      <Timeline />
      <Blog />
    </main>
  );
}
