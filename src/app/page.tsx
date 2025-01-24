import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import SearchServices from "@/components/SearchServices";
import News from "@/components/News";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CEIPA",
  description: "Industrial Petrolera y Afines del Neuquén",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <News />
      <Pricing />
      <SearchServices />
      <Contact />
    </>
  );
}
