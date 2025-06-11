import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[#60A5FA] leading-tight">
            From Knowledge to Experience
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Decentralized, Engaging, and Immutable Research Platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/explore" 
              className="px-8 py-3 bg-[#1E3A8A] text-white rounded-lg font-medium hover:bg-[#2563EB] transition-colors"
            >
              Explore Research
            </Link>
            <Link 
              href="/publish" 
              className="px-8 py-3 border-2 border-[#60A5FA] text-[#60A5FA] rounded-lg font-medium hover:bg-[#60A5FA] hover:text-black transition-colors"
            >
              Publish Your Work
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-[#1E3A8A]/20 p-8 rounded-xl border border-[#60A5FA]/20">
          <div className="w-12 h-12 bg-[#60A5FA] rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#60A5FA] mb-2">Upload Research</h3>
          <p className="text-white/80">
            Securely publish your academic work on Filecoin IPFS storage with guaranteed immutability.
          </p>
        </div>

        <div className="bg-[#1E3A8A]/20 p-8 rounded-xl border border-[#60A5FA]/20">
          <div className="w-12 h-12 bg-[#60A5FA] rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#60A5FA] mb-2">AI-Powered Visualization</h3>
          <p className="text-white/80">
            Transform dense papers into engaging videos, animations, and explainers automatically.
          </p>
        </div>

        <div className="bg-[#1E3A8A]/20 p-8 rounded-xl border border-[#60A5FA]/20">
          <div className="w-12 h-12 bg-[#60A5FA] rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#60A5FA] mb-2">Earn Revenue</h3>
          <p className="text-white/80">
            Get paid for your research through our fair, transparent pay-per-access model.
          </p>
        </div>
      </section>

      {/* Why Filecoin Section */}
      <section className="bg-[#1E3A8A]/20 rounded-2xl p-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-[#60A5FA] text-center">Why Filecoin?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#60A5FA] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Immutable & Decentralized</h3>
              </div>
              <p className="text-white/80">Your research is stored on a trustless network, ensuring it remains accessible and unchanged.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#60A5FA] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Verifiable</h3>
              </div>
              <p className="text-white/80">Metadata and publishing proof are stored on-chain for complete transparency.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#60A5FA] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Fair Economics</h3>
              </div>
              <p className="text-white/80">Smart contracts ensure fair revenue distribution for researchers.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#60A5FA] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Built for Science</h3>
              </div>
              <p className="text-white/80">Transforming dense PDFs into accessible content for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold text-[#60A5FA]">Ready to Transform Your Research?</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Join the future of research dissemination. Publish your work, reach global audiences, and earn fair compensation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/publish" 
            className="px-8 py-3 bg-[#1E3A8A] text-white rounded-lg font-medium hover:bg-[#2563EB] transition-colors"
          >
            Start Publishing
          </Link>
          <Link 
            href="/about" 
            className="px-8 py-3 border-2 border-[#60A5FA] text-[#60A5FA] rounded-lg font-medium hover:bg-[#60A5FA] hover:text-black transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
