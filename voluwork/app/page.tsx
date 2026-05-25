'use client';
import React, { useEffect } from 'react';

const features = [
  { title: "Impact Videos", desc: "Upload and showcase your community work with short videos" },
  { title: "Smart Donations", desc: "Receive direct donations from supporters worldwide" },
  { title: "Digital Wallet", desc: "Withdraw earnings instantly to bank or mobile money" },
  { title: "Verification Badge", desc: "Build trust with identity & impact verification" },
  { title: "Community Feed", desc: "Discover trending volunteers and local impact stories" },
  { title: "Real-time Tracking", desc: "See your impact metrics: hours, beneficiaries & donations" },
];

export default function VoluworkPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
            <div className="font-bold text-2xl tracking-tight text-gray-900">Voluwork</div>
          </div>

          <div className="flex items-center gap-6 md:gap-8 text-sm font-medium text-gray-700">
            <button onClick={() => scrollToSection('how')} className="hover:text-emerald-600 transition-colors">How it Works</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-emerald-600 transition-colors">Features</button>
            <button onClick={() => scrollToSection('impact')} className="hover:text-emerald-600 transition-colors">Impact</button>
            <a href="#" className="bg-emerald-600 text-white px-6 py-2.5 rounded-2xl hover:bg-emerald-700 transition-colors">Join as Volunteer</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-emerald-700 via-teal-600 to-cyan-700 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full mb-6 text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              Real Impact • Real Support • Real Change
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Show Your Impact.<br />Get Real Support.
            </h1>

            <p className="text-xl text-emerald-100 mb-10">
              The video platform where volunteers document community work, gain visibility, 
              and receive direct donations from people who believe in their impact.
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
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-sm text-gray-500">
          <div>Featured on</div>
          <a href="#" className="hover:text-gray-900">YouTube</a>
          <a href="#" className="hover:text-gray-900">TikTok</a>
          <a href="#" className="hover:text-gray-900">X (Twitter)</a>
          <div className="text-emerald-600 font-medium">Join 15,000+ Impact Creators</div>
        </div>
      </div>

      {/* Problem & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold mb-6">Your Good Work Shouldn’t Go Unnoticed</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Many people give their time, energy, and resources to their communities — 
                but get little recognition or support. Voluwork changes that.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm animate-on-scroll">
              <h3 className="font-semibold text-emerald-600 mb-4">OUR VISION</h3>
              <p className="text-2xl leading-tight font-medium text-gray-800">
                To build the world’s largest platform where community impact is visible, supported, rewarded, and encouraged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for Real Impact</h2>
            <p className="text-xl text-gray-600">Everything you need to showcase your work and grow your support</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="border border-gray-100 hover:border-emerald-200 p-8 rounded-3xl transition-all hover:shadow-xl animate-on-scroll">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  🎥
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">How Voluwork Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Create Profile", desc: "Sign up and build your volunteer profile" },
              { step: "02", title: "Upload Impact", desc: "Share videos of your community work" },
              { step: "03", title: "Gain Supporters", desc: "People discover and follow your journey" },
              { step: "04", title: "Earn & Withdraw", desc: "Receive donations directly into your wallet" },
            ].map((item) => (
              <div key={item.step} className="text-center animate-on-scroll">
                <div className="mx-auto w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to show the world your impact?</h2>
          <p className="text-xl mb-10 opacity-90">Join thousands of volunteers turning good deeds into supported movements.</p>
          <button className="bg-white text-emerald-700 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
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

          <div className="text-center mt-12 text-xs opacity-60">
            © 2026 Voluwork • Empowering Community Changemakers
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