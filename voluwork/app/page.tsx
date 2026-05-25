'use client';
import React, { useEffect } from 'react';

const features = [
  { 
    title: "Impact Videos", 
    desc: "Upload and showcase your community work with short videos and earn data credit after every impactful and meaningful video to enable you to post more",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    title: "Transparent Withdrawals", 
    desc: "All support and donations received for your community work are processed transparently through Voluwork.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-1a2 2 0 01-2-2H9a2 2 0 01-2-2v-1a2 2 0 012-2m2-2V9a2 2 0 012-2" />
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
            <img src="/volu.png" alt="Voluwork Logo" className="w-14 h-14 rounded-2xl" />
            <div className="font-bold text-2xl tracking-tight text-black">Voluwork</div>
          </div>

          <div className="flex items-center gap-6 md:gap-8 text-sm font-medium text-gray-800">
            <button onClick={() => scrollToSection('how')} className="hover:text-emerald-600 transition-colors">How it Works</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-emerald-600 transition-colors">Features</button>
            <a href="https://instagram.com/voluwork" target="_blank" className="bg-emerald-600 text-white px-6 py-2.5 rounded-2xl hover:bg-emerald-700 transition-colors">Join on Instagram</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
              gain visibility, and receive direct support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://instagram.com/voluwork" 
                target="_blank"
                className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all text-lg inline-block text-center"
              >
                Get Started on Instagram
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Bar with Logos */}
      <div className="bg-white border-b py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-5">
            <div className="font-medium text-gray-700">Follow us on</div>
            
            <a href="https://youtube.com/@voluwork?si=W7hot0AVDlN_syzA" target="_blank" className="hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            <a href="https://www.tiktok.com/@voluwork?_r=1&_t=ZS-96ekbOMiOIP" target="_blank" className="hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="#000">
                <path d="M12.525 3.5v8.078a4.5 4.5 0 1 1-2.25-3.89v2.25a2.25 2.25 0 1 0 2.25 2.25V3.5h2.25c.124-1.336.69-2.5 1.5-3.25h-3.75z"/>
                <path d="M19.5 9.75a4.5 4.5 0 0 1-3.75-2.12v2.25a2.25 2.25 0 0 0 1.5 2.12v.75a6 6 0 0 1-12 0v-.75a2.25 2.25 0 0 0 1.5-2.12V9.75A6 6 0 0 1 19.5 9.75z"/>
              </svg>
            </a>

            <a href="https://www.x.com/voluwork" target="_blank" className="hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="#000">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.9 1.153z"/>
              </svg>
            </a>
          </div>
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
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Simple steps to get your community project supported and funded
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: "1", title: "Visit our Instagram", desc: "Send us a message about the voluntary activity or community project you want to carry out." },
              { step: "2", title: "Share Your Idea", desc: "Tell us what you want to do, why you want to do it, and how it will help the community." },
              { step: "3", title: "Project Review", desc: "Our team will review your idea. If approved, we will ask you to begin documenting the process." },
              { step: "4", title: "Document Your Work", desc: "Send videos showing how the work begins, the progress, and the final result & impact created." },
              { step: "5", title: "Get Visibility", desc: "Voluwork will share your approved content on our platforms for people around the world to see and support." },
              { step: "6", title: "Receive Support", desc: "Supporters may donate to your work. Funds received will be transferred to you after processing charges." },
              { step: "7", title: "Create Lasting Impact", desc: "Encourage more people to impact their communities while giving meaningful projects visibility and support." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 bg-white p-6 md:p-8 rounded-3xl border border-gray-100">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-black">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-white">Ready to make an impact?</h2>
          <p className="text-lg mb-8 text-emerald-100">Start your journey by reaching out to us on Instagram.</p>
          <a 
            href="https://instagram.com/voluwork" 
            target="_blank"
            className="bg-white text-emerald-700 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all inline-block"
          >
            Message Us on Instagram →
          </a>
        </div>
      </section>

      {/* Compact Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img src="/volu.png" alt="Voluwork Logo" className="w-14 h-14" />
              <span className="text-white font-semibold text-2xl">Voluwork</span>
            </div>

            {/* Social Icons in Footer */}
            <div className="flex gap-8">
              <a href="https://youtube.com/@voluwork?si=W7hot0AVDlN_syzA" target="_blank" className="hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a href="https://www.tiktok.com/@voluwork?_r=1&_t=ZS-96ekbOMiOIP" target="_blank" className="hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525 3.5v8.078a4.5 4.5 0 1 1-2.25-3.89v2.25a2.25 2.25 0 1 0 2.25 2.25V3.5h2.25c.124-1.336.69-2.5 1.5-3.25h-3.75z"/>
                  <path d="M19.5 9.75a4.5 4.5 0 0 1-3.75-2.12v2.25a2.25 2.25 0 0 0 1.5 2.12v.75a6 6 0 0 1-12 0v-.75a2.25 2.25 0 0 0 1.5-2.12V9.75A6 6 0 0 1 19.5 9.75z"/>
                </svg>
              </a>

              <a href="https://instagram.com/voluwork" target="_blank" className="hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              <a href="https://www.x.com/voluwork" target="_blank" className="hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.9 1.153z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center mt-10 text-xs opacity-60 border-t border-gray-800 pt-6">
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