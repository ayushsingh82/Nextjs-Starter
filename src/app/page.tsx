import Link from 'next/link';

import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Vortex } from "@/components/ui/vortex";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { BackgroundLines } from "@/components/ui/background-lines";
// import { motion } from "motion/react";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={"Hello, World!"} />;
}

function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-[650px] flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Starter Kit is ready to use
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Get the best advices from our experts, including expert artists,
        painters, marathon enthusiasts and RDX, totally free.
      </p>
      <button className="px-4 py-2 bg-blue-500 mt-4 text-white rounded-lg font-medium hover:bg-[#2563EB] transition-colors">
        Get Started
      </button>
     
    </BackgroundLines>
  );
}

function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
        Our Features
      </h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-[20px]">
        <div className="space-y-4 bg-[#1E3A8A]/10 p-6 rounded-xl border border-gray-700 relative">
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#60A5FA] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Immutable & Decentralized</h3>
            </div>
            <p className="text-white/80 mt-4 text-base">Your research is stored on a trustless network, ensuring it remains accessible and unchanged.</p>
          </div>
        </div>
        <div className="space-y-4 bg-[#1E3A8A]/10 p-6 rounded-xl border border-gray-700 relative">
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#60A5FA] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Verifiable</h3>
            </div>
            <p className="text-white/80 mt-4 text-base">Metadata and publishing proof are stored on-chain for complete transparency.</p>
          </div>
        </div>
        <div className="space-y-4 bg-[#1E3A8A]/10 p-6 rounded-xl border border-gray-700 relative">
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#60A5FA] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Fair Economics</h3>
            </div>
            <p className="text-white/80 mt-4 text-base">Smart contracts ensure fair revenue distribution for researchers.</p>
          </div>
        </div>
        <div className="space-y-4 bg-[#1E3A8A]/10 p-6 rounded-xl border border-gray-700 relative">
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#60A5FA] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Built for Science</h3>
            </div>
            <p className="text-white/80 mt-4 text-base">Transforming dense PDFs into accessible content for everyone.</p>
          </div>
        </div>
      </div>
    </HeroHighlight>
  );
}





function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
         Ready to transform your research?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
          burned and you&apos;ll have a scar.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Order now
          </button>
          <button className="px-4 py-2  text-white ">Watch trailer</button>
        </div>
      </Vortex>
    </div>
  );
}




function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>
    </WavyBackground>
  );
}

function SpotlightPreview() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center animate-float">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />
 
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Spotlight <br /> is the new trend.
        </h1>
        <div className="flex flex-col items-center justify-center ">
        <BackgroundLinesDemo/>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link 
            href="/explore" 
            className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-[#2563EB] transition-colors"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Spotlight Section - Full Width */}
      <SpotlightPreview />

      <HeroHighlightDemo/>
        
        <VortexDemo/>
        
    </div>
  );
}
