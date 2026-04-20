import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Stack } from "@/components/sections/Stack";
import { Contact } from "@/components/sections/Contact";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { AnimatedGradient } from "@/components/ui/AnimatedGradient";

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: "#050505" }}>
      <BackgroundBeams />
      <AnimatedGradient />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Stack />
      <Contact />
    </main>
  );
}
