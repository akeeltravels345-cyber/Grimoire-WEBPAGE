import { useEffect, useRef } from "react";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("cta-in");
        });
      },
      { threshold: 0.2 }
    );
    const elements = sectionRef.current?.querySelectorAll(".cta-reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="download" ref={sectionRef} className="relative z-10 py-40 overflow-hidden">
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(201,160,220,0.08) 0%, rgba(201,168,76,0.04) 30%, transparent 70%)",
        }}
      />

      {/* Orbiting circles */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
        {[
          { size: 400, color: "rgba(201,160,220,0.06)", duration: "40s" },
          { size: 520, color: "rgba(201,168,76,0.04)", duration: "60s" },
          { size: 600, color: "rgba(201,160,220,0.03)", duration: "80s" },
        ].map((circle, i) => (
          <div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: circle.size,
              height: circle.size,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderColor: circle.color,
              animation: `slowRotate ${circle.duration} linear infinite`,
            }}
          >
            {/* Dot on circle */}
            <div
              className="absolute w-2 h-2 rounded-full -top-1 left-1/2 -translate-x-1/2"
              style={{
                backgroundColor: i === 0 ? "#C9A0DC" : "#C9A84C",
                boxShadow: `0 0 8px ${i === 0 ? "#C9A0DC" : "#C9A84C"}`,
              }}
            />
          </div>
        ))}

        {/* Center moon */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl"
          style={{
            color: "#C9A84C",
            textShadow: "0 0 40px rgba(201,168,76,0.6)",
            animation: "glowPulse 4s ease-in-out infinite",
          }}
        >
          ☽
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <div
          className="cta-reveal inline-flex items-center gap-2 rounded-full border border-lavender/30 bg-lavender/10 px-5 py-2 mb-8"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s ease" }}
        >
          <span className="text-lavender text-xs">✦</span>
          <span className="font-cinzel text-xs text-lavender tracking-widest uppercase">
            Available Now on iOS
          </span>
        </div>

        <h2
          className="cta-reveal font-cinzel-dec text-4xl md:text-5xl lg:text-6xl font-bold text-blush mb-6 leading-tight"
          style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.8s ease 0.1s" }}
        >
          Begin your{" "}
          <span className="text-gradient-gold">practice</span> tonight.
        </h2>

        <p
          className="cta-reveal font-garamond text-xl md:text-2xl italic text-lavender mb-10 leading-relaxed"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s ease 0.2s" }}
        >
          The moon isn't waiting. Neither is your magic.
        </p>

        <p
          className="cta-reveal font-garamond text-lg text-blush/60 mb-12 max-w-lg mx-auto leading-relaxed"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s ease 0.3s" }}
        >
          Download Grimoire and open a space for your practice that feels as serious and sacred as the work itself.
        </p>

        {/* App Store Button */}
        <div
          className="cta-reveal flex flex-col sm:flex-row items-center justify-center gap-6"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s ease 0.4s" }}
        >
          <a
            href="#"
            className="btn-gold text-base px-10 py-5 animate-glow-pulse"
            style={{ fontSize: "1rem" }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on the App Store
          </a>
        </div>

        {/* Sub-note */}
        <p
          className="cta-reveal mt-8 font-cinzel text-xs text-blush/30 tracking-widest uppercase"
          style={{ opacity: 0, transition: "all 0.8s ease 0.5s" }}
        >
          iPhone Only · iOS 16+ · Free to Download
        </p>

        {/* Cosmic ornament */}
        <div className="mt-16 flex items-center justify-center gap-6">
          <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-gold/20" />
          <span className="font-cinzel-dec text-gold/30 text-sm">✦ ✦ ✦</span>
          <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-gold/20" />
        </div>
      </div>

      <style>{`
        .cta-reveal.cta-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @keyframes slowRotate {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 20px rgba(201,168,76,0.4); }
          50% { text-shadow: 0 0 50px rgba(201,168,76,0.8), 0 0 80px rgba(201,168,76,0.3); }
        }
      `}</style>
    </section>
  );
}
