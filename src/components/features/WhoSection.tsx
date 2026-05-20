import { useEffect, useRef } from "react";

const traits = [
  {
    text: "You've been at this long enough to know the difference between ceremony and performance.",
  },
  {
    text: "Your practice has its own language — moon phases, planetary days, elemental correspondences. You don't need it explained.",
  },
  {
    text: "You've kept paper journals, but you also live on your phone. You're looking for something that honors both.",
  },
  {
    text: "You take your privacy seriously. Your practice is intimate. It doesn't belong in a social feed.",
  },
  {
    text: "You're done with apps that feel like productivity tools with a spell skin. You want something that actually feels sacred.",
  },
];

export default function WhoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    const elements = sectionRef.current?.querySelectorAll(".who-reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="who" ref={sectionRef} className="relative z-10 py-32">
      {/* Side glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="ornament-line mb-6">
              <span className="font-cinzel text-xs text-gold/60 tracking-widest uppercase">
                For the Practitioner
              </span>
            </div>

            <h2
              className="who-reveal section-heading mb-8"
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.8s ease" }}
            >
              This was built{" "}
              <span className="text-gradient-gold">for you</span>, specifically.
            </h2>

            <p
              className="who-reveal font-garamond text-xl italic text-lavender mb-10 leading-relaxed"
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.8s ease 0.1s" }}
            >
              "Woo-curious" is welcome. Seasoned practitioner is home. Grimoire meets you exactly where your practice lives.
            </p>

            <div className="space-y-4">
              {traits.map((trait, i) => (
                <div
                  key={i}
                  className="who-reveal flex items-start gap-4"
                  style={{
                    opacity: 0,
                    transform: "translateY(20px)",
                    transition: `all 0.7s ease ${0.2 + i * 0.1}s`,
                  }}
                >
                  <span className="text-gold mt-1 text-sm shrink-0">✦</span>
                  <p className="font-garamond text-lg leading-relaxed text-blush/75">{trait.text}</p>
                </div>
              ))}
            </div>

            <div
              className="who-reveal mt-12"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease 0.8s" }}
            >
              <p className="font-garamond text-xl italic text-blush/50">
                Built by a practitioner, for practitioners. No wellness-washing. No pink crystals. No affirmations unless you write them yourself.
              </p>
            </div>
          </div>

          {/* Right: Visual stats / practice illustration */}
          <div
            className="who-reveal"
            style={{ opacity: 0, transform: "translateX(40px)", transition: "all 1s ease 0.3s" }}
          >
            <div className="grimoire-card p-10 relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="font-cinzel text-xs text-gold/60 tracking-widest uppercase mb-1">
                    Monthly Chronicle
                  </p>
                  <p className="font-cinzel text-lg text-blush">November 2025</p>
                </div>
                <div className="text-4xl" style={{ textShadow: "0 0 15px rgba(201,168,76,0.4)" }}>
                  ☽
                </div>
              </div>

              {/* Practice stats */}
              <div className="space-y-5 mb-8">
                {[
                  { label: "Full Moon Ritual", status: "complete", moon: "●" },
                  { label: "New Moon Intentions", status: "complete", moon: "○" },
                  { label: "Wednesday Planetary Work", status: "complete", moon: "◑" },
                  { label: "Daily Protection Ritual", status: "active", moon: "●" },
                  { label: "Samhain Ancestor Ritual", status: "complete", moon: "◉" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="text-gold text-xs w-4 shrink-0">{item.moon}</span>
                    <span className="font-garamond text-base text-blush/75 flex-1">{item.label}</span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        item.status === "complete"
                          ? "bg-sage"
                          : "bg-lavender animate-pulse"
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Completion bar */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-cinzel text-xs text-blush/40 tracking-wider">Practice Completion</span>
                  <span className="font-cinzel text-xs text-gold">87%</span>
                </div>
                <div className="h-1.5 rounded-full bg-void-600 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "87%",
                      background: "linear-gradient(to right, #C9A84C, #C9A0DC)",
                    }}
                  />
                </div>
              </div>

              {/* Current moon context */}
              <div
                className="rounded-xl p-4 border border-lavender/15"
                style={{ background: "rgba(201,160,220,0.06)" }}
              >
                <p className="font-cinzel text-[10px] tracking-widest text-lavender/60 uppercase mb-1">
                  Current Cosmic Context
                </p>
                <p className="font-garamond text-base text-blush/70">
                  Waxing Gibbous Moon in Taurus · Venus Hour
                </p>
              </div>

              {/* Glow overlay */}
              <div
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 70%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .who-reveal.in-view {
          opacity: 1 !important;
          transform: translate(0) !important;
        }
      `}</style>
    </section>
  );
}
