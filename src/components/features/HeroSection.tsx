import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import phoneMockup from "@/assets/phone-mockup.png";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-10 min-h-screen flex items-center overflow-hidden"
    >
      {/* Hero Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover object-center"
          style={{ opacity: 0.35 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,7,32,0.4) 0%, rgba(13,7,32,0.1) 40%, rgba(13,7,32,0.8) 80%, rgba(13,7,32,1) 100%)",
          }}
        />
      </div>

      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,160,220,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20 lg:pt-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            {/* Moon phase badge */}
            <div
              className="reveal inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 mb-8"
              style={{ opacity: 0 }}
            >
              <span className="text-gold text-sm">☽</span>
              <span className="font-cinzel text-xs text-gold tracking-widest uppercase">
                Now Available on iOS
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="reveal font-cinzel-dec text-5xl font-bold leading-tight text-blush md:text-6xl lg:text-7xl mb-6"
              style={{ opacity: 0, animationDelay: "0.1s" }}
            >
              <span className="text-gradient-gold">Grimoire</span>
            </h1>

            {/* Tagline */}
            <p
              className="reveal font-garamond text-2xl italic text-lavender mb-6"
              style={{ opacity: 0, animationDelay: "0.2s", textShadow: "0 0 20px rgba(201,160,220,0.3)" }}
            >
              Your sacred space for witchcraft practice.
            </p>

            {/* Description */}
            <p
              className="reveal font-garamond text-xl leading-relaxed text-blush/70 mb-10 max-w-lg mx-auto lg:mx-0"
              style={{ opacity: 0, animationDelay: "0.3s" }}
            >
              Track rituals by moon phase, set monthly intentions, log your manifestations,
              and keep your spellwork private. A digital grimoire built for the seriousness of the craft.
            </p>

            {/* CTAs */}
            <div
              className="reveal flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start"
              style={{ opacity: 0, animationDelay: "0.4s" }}
            >
              <a
                href="#download"
                onClick={(e) => { e.preventDefault(); scrollTo("download"); }}
                className="btn-gold animate-glow-pulse"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on the App Store
              </a>
              <button
                onClick={() => scrollTo("features")}
                className="btn-ghost"
              >
                Explore the craft
              </button>
            </div>

            {/* Trust badges */}
            <div
              className="reveal mt-10 flex items-center gap-6 justify-center lg:justify-start"
              style={{ opacity: 0, animationDelay: "0.5s" }}
            >
              {[
                { icon: "🔒", text: "100% Private" },
                { icon: "☽", text: "Moon Phase Aware" },
                { icon: "✦", text: "No Account Needed" },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2">
                  <span className="text-sm">{badge.icon}</span>
                  <span className="font-cinzel text-xs text-blush/50 tracking-wider">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div
            className="reveal flex justify-center lg:justify-end"
            style={{ opacity: 0, animationDelay: "0.3s" }}
          >
            <div
              className="relative"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              {/* Glow behind phone */}
              <div
                className="absolute inset-0 rounded-[3rem] blur-3xl"
                style={{ background: "radial-gradient(ellipse, rgba(201,160,220,0.25) 0%, rgba(201,168,76,0.1) 60%, transparent 80%)" }}
              />
              <img
                src={phoneMockup}
                alt="Grimoire App on iPhone"
                className="relative w-72 md:w-80 lg:w-96 drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 0 40px rgba(201,160,220,0.3))" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("features")}
      >
        <span className="font-cinzel text-xs text-blush/30 tracking-widest uppercase">Explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-lavender/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
