import Link from 'next/link';

import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { WavyBackground } from "@/components/ui/wavy-background";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={"Hello, World!"} />;
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
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
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
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link 
            href="/explore" 
            className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-[#2563EB] transition-colors"
          >
            Explore Research
          </Link>
          <Link 
            href="/upload" 
            className="px-8 py-3 border-2 border-blue-500 text-[#60A5FA] rounded-lg font-medium hover:bg-[#60A5FA] hover:text-black transition-colors"
          >
            Publish Your Work
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">
        {/* Why Filecoin Section */}
        <section className="bg-[#60A5FA]/3 rounded-2xl p-12 border border-gray-700 relative">
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(#6B7280_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
          <div className="max-w-4xl mx-auto space-y-8 relative">
            <h2 className="text-3xl font-bold text-white text-center">Why Filecoin?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 bg-[#1E3A8A]/10 p-6 rounded-xl border border-gray-700 relative">
                <div className="absolute inset-0 rounded-xl bg-[radial-gradient(#6B7280_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#60A5FA] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Immutable & Decentralized</h3>
                  </div>
                  <p className="text-white/80 mt-4">Your research is stored on a trustless network, ensuring it remains accessible and unchanged.</p>
                </div>
              </div>
              <div className="space-y-4 bg-[#1E3A8A]/10 p-6 rounded-xl border border-gray-700 relative">
                <div className="absolute inset-0 rounded-xl bg-[radial-gradient(#6B7280_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#60A5FA] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Verifiable</h3>
                  </div>
                  <p className="text-white/80 mt-4">Metadata and publishing proof are stored on-chain for complete transparency.</p>
                </div>
              </div>
              <div className="space-y-4 bg-[#1E3A8A]/10 p-6 rounded-xl border border-gray-700 relative">
                <div className="absolute inset-0 rounded-xl bg-[radial-gradient(#6B7280_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#60A5FA] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Fair Economics</h3>
                  </div>
                  <p className="text-white/80 mt-4">Smart contracts ensure fair revenue distribution for researchers.</p>
                </div>
              </div>
              <div className="space-y-4 bg-[#1E3A8A]/10 p-6 rounded-xl border border-gray-700 relative">
                <div className="absolute inset-0 rounded-xl bg-[radial-gradient(#6B7280_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#60A5FA] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Built for Science</h3>
                  </div>
                  <p className="text-white/80 mt-4">Transforming dense PDFs into accessible content for everyone.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        

        {/* CTA Section */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-white">Ready to Transform Your Research?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join the future of research dissemination. Publish your work, reach global audiences, and earn fair compensation.
          </p>
          <div className="w-full">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/upload" 
                className="px-8 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors border border-gray-600"
              >
                Start Publishing
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-3 border-2 border-gray-700 text-white rounded-lg font-medium hover:bg-gray-700 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy Section Above Footer */}
      
        
 
    
    
    </div>
  );
}
