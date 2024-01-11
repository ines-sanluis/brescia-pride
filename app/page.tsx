import ShuffleHero from "./ui/header";
import CollapseCardFeatures from "./ui/cards";
import { FlipNav } from "./ui/navbar";
import { Footer } from "./ui/footer";
import RevealCards from "./ui/reveal";

export default function Home() {
  return (
      <div className="bg-neutral-50 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
        <FlipNav />
        <main>
          <ShuffleHero />
          <CollapseCardFeatures />
          <RevealCards />
        </main>
        <Footer />
      </div>
  )
}
