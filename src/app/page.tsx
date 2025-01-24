import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
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
      <News />
      <SearchServices />
      <Contact />
    </>
  );
}
