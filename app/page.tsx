import ShuffleHero from "./ui/header";
import CollapseCardFeatures from "./ui/cards";
import { FlipNav } from "./ui/navbar";
import { Footer } from "./ui/footer";
import RevealCards from "./ui/reveal";

export default function Home() {
  return (
      <div>
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
