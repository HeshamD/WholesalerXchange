import { GlobeDemo } from "./components/earth/GlobeDemo";
import Features from "./components/features/Features";
import GetApp from "./components/GetApp";
import Guide from "./components/Guide/Guide";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Camp /> */}
      <GlobeDemo />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
