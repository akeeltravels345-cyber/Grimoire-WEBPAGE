import { useEffect, useRef } from "react";
import moonDivider from "@/assets/moon-divider.jpg";

const privacyPoints = [
  {
    icon: "⬡",
    title: "Stored only on your device",
    description:
      "Your rituals, intentions, journal entries, and spell library never leave your phone. No server. No cloud sync. No copy of your practice exists anywhere but with you.",
  },
  {
    icon: "◎",
    title: "No account. No sign-in.",
    description:
      "There's nothing to create, no email required, no profile. You open the app. You practice. That's it. Your identity is not a product here.",
  },
  {
    icon: "⊗",
    title: "No tracking. No analytics.",
    description:
      "We don't know how often you open the app, which features you use, or what you write. Zero. Not anonymized data — zero data. Your patterns are yours.",
  },
  {
    icon: "✦",
    title: "Your data is never sold",
    description:
      "Because we don't have it. This isn't a pledge about responsible data handling — it's a structural impossibility. We cannot sell what we do not collect.",
  },
];

export default function PrivacySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("priv-in");
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".priv-reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Moon divider */}
      <div className="relative z-10 h-32 overflow-hidden">
        <img
          src={moonDivider}
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.2 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0D0720 0%, transparent 20%, transparent 80%, #0D0720 100%), linear-gradient(to bottom, #0D0720 0%, transparent 30%, transparent 70%, #0D0720 100%)",
          }}
        />
      </div>

      <section id="privacy" ref={sectionRef} className="relative z-10 py-32">
        {/* Background accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(33,21,82,0.4) 0%, transparent 70%)",
          }}
        />

        <div className="mx-auto max-w-6xl px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <div className="ornament-line mb-6">
              <span className="font-cinzel text-xs text-gold/60 tracking-widest uppercase">
                Sacred Privacy
              </span>
            </div>
            <h2
              className="priv-reveal section-heading mb-6"
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.8s ease" }}
            >
              Your practice is{" "}
              <span className="text-gradient-gold">yours</span>.
            </h2>
            <p
              className="priv-reveal section-subheading max-w-2xl mx-auto"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s ease 0.1s" }}
            >
              Witchcraft has always been private by necessity. Grimoire was designed with that history in mind.
              What you practice, what you seek, what you release — none of it belongs to a server.
            </p>
          </div>

          {/* Privacy points grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {privacyPoints.map((point, i) => (
              <div
                key={point.title}
                className="priv-reveal grimoire-card p-8 group"
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `all 0.7s ease ${0.2 + i * 0.1}s`,
                }}
              >
                <div className="flex items-start gap-6">
                  <div
                    className="text-3xl w-14 h-14 flex items-center justify-center rounded-2xl shrink-0"
                    style={{
                      color: "#C9A84C",
                      background: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      textShadow: "0 0 15px rgba(201,168,76,0.4)",
                    }}
                  >
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-semibold text-blush mb-3 group-hover:text-gold transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="font-garamond text-base leading-relaxed text-blush/65">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Big privacy statement */}
          <div
            className="priv-reveal text-center"
            style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.8s ease 0.7s" }}
          >
            <div
              className="inline-block rounded-3xl border border-gold/20 px-12 py-10 max-w-3xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(33,21,82,0.6) 100%)",
              }}
            >
              <p
                className="font-cinzel-dec text-2xl md:text-3xl text-gold leading-relaxed"
                style={{ textShadow: "0 0 30px rgba(201,168,76,0.3)" }}
              >
                "What is written in the grimoire stays in the grimoire."
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40 self-center" />
                <span className="text-gold/60 text-xs">✦</span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40 self-center" />
              </div>
              <p className="mt-4 font-garamond text-sm text-blush/40 italic">
                Always. Without exception.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          .priv-reveal.priv-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `}</style>
      </section>
    </>
  );
}
