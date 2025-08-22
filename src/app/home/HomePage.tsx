"use client";

import { useRef } from "react";
import SectionOneHero from "./sections/SectionOneHero";
import SectionTwoHome from "./sections/SectionTwoHome";
import SectionThreeHome from "./sections/SectionThreeHome";
import SectionFourHome from "./sections/SectionFourHome";
import SectionFiveHome from "./sections/SectionFiveHome";

import SectionEightHome from "./sections/SectionEightHome";
import CtaSectionHome from "./sections/CtaSectionHome";
import SectionStoriesHome from "./sections/SectionStoriesHome";
import SectionSevenHome from "./sections/Faq";

const HomePage = () => {
  const nextScrollRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    nextScrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-white">
      <SectionOneHero onScrollNextSection={scrollToNextSection} />
      <SectionTwoHome refScroll={nextScrollRef} />
      <SectionThreeHome />
      <SectionFourHome />
      <SectionStoriesHome />
      <SectionFiveHome />
      {/* <SectionSevenHome/> */}
      <SectionEightHome />
      <CtaSectionHome />
    </main>
  );
};

export default HomePage;
