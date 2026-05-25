'use client';
import React, { useEffect } from 'react';

const features = [
  { 
    title: "Impact Videos", 
    desc: "Upload and showcase your community work with short videos",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276L20 10V18H4V6L8.553 3.724 12 6 15.447 3.724 20 6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276L20 10V18H4V6L8.553 3.724 12 6 15.447 3.724 20 6" />
      </svg>
    )
  },
  { 
    title: "Smart Donations", 
    desc: "Receive direct donations from supporters worldwide",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-1a2 2 0 01-2-2H9a2 2 0 01-2-2v-1a2 2 0 012-2m2-2V9a2 2 0 012-2" />
      </svg>
    )
  },
  { 
    title: "Digital Wallet", 
    desc: "Withdraw earnings instantly to bank or mobile money",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3" />
      </svg>
    )
  },
  { 
    title: "Verification Badge", 
    desc: "Build trust with identity & impact verification",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 8.944 11.922.42.095.858.143 1.295.143a3 3 0 01.435-.008" />
      </svg>
    )
  },
  { 
    title: "Community Feed", 
    desc: "Discover trending volunteers and local impact stories",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2" />
      </svg>
    )
  },
  { 
    title: "Real-time Tracking", 
    desc: "See your impact metrics: hours, beneficiaries & donations",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-9 9-4-4-6 6" />
      </svg>
    )
  },
];

export default function VoluworkPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 md:px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/volu.png" alt="Voluwork Logo" className="w-10 h-10 rounded-2xl" />
            <div className="font-bold text-2xl tracking-tight text-black">Voluwork</div>
          </div>

          <div className="flex items-center gap-6 md:gap-8 text-sm font-medium text-gray-800">
            <button onClick={() => scrollToSection('how')} className="hover:text-emerald-600 transition-colors">How it Works</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-emerald-600 transition-colors">Features</button>
            <button onClick={() => scrollToSection('impact')} className="hover:text-emerald-600 transition-colors">Impact</button>
            <a href="#" className="bg-emerald-600 text-white px-6 py-2.5 rounded-2xl hover:bg-emerald-700 transition-colors">Join as Volunteer</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Compact */}
      <header className="bg-gradient-to-br from-emerald-700 via-teal-600 to-cyan-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full mb-5 text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              Real Impact • Real Support
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-5 text-white">
              Show Your Impact.<br />Get Real Support.
            </h1>

            <p className="text-lg md:text-xl text-emerald-100 mb-8">
              The video platform where volunteers document community work, 
              gain visibility, and receive direct donations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all text-lg"
              >
                Start Volunteering
              </button>
              <button className="border border-white/70 hover:bg-white/10 px-8 py-4 rounded-2xl font-medium transition-all text-lg">
                Watch Demo Videos
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <div className="bg-white border-b py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-10 gap-y-3 text-sm text-gray-700">
          <div>Featured on</div>
          <a href="#" className="hover:text-black font-medium">YouTube</a>
          <a href="#" className="hover:text-black font-medium">TikTok</a>
          <a href="#" className="hover:text-black font-medium">X (Twitter)</a>
          <div className="text-emerald-600 font-medium">Join 15,000+ Impact Creators</div>
        </div>
      </div>

      {/* Core Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Built for Real Impact</h2>
            <p className="text-xl text-gray-700">Everything you need to showcase your work and grow your support</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="border border-gray-100 hover:border-emerald-200 p-8 rounded-3xl transition-all hover:shadow-xl">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">How Voluwork Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Create Profile", desc: "Sign up and build your volunteer profile" },
              { step: "02", title: "Upload Impact", desc: "Share videos of your community work" },
              { step: "03", title: "Gain Supporters", desc: "People discover and follow your journey" },
              { step: "04", title: "Earn & Withdraw", desc: "Receive donations directly into your wallet" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="font-bold text-xl mb-2 text-black">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-white">Ready to show the world your impact?</h2>
          <p className="text-lg mb-8 text-emerald-100">Join thousands turning good deeds into supported movements.</p>
          <button className="bg-white text-emerald-700 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Compact Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src="/volu.png" alt="Voluwork" className="w-9 h-9" />
              <span className="text-white font-semibold text-2xl">Voluwork</span>
            </div>

            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-white">YouTube</a>
              <a href="#" className="hover:text-white">TikTok</a>
              <a href="#" className="hover:text-white">X / Twitter</a>
            </div>
          </div>

          <div className="text-center mt-8 text-xs opacity-60 border-t border-gray-800 pt-6">
            © 2026 Voluwork • Empowering Community Changemakers in Nigeria
          </div>
        </div>
      </footer>

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.7s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}