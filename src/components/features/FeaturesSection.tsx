import { useEffect, useRef } from "react";

const features = [
  {
    icon: "☽",
    iconColor: "#C9A84C",
    title: "Ritual Tracking",
    subtitle: "Daily, Weekly, Moon Phase & One-Time",
    description:
      "Log every ritual with full context — moon phase, planetary hour, intentions set, and personal reflections. Schedule recurring practices or capture spontaneous workings. Your practice, rendered in full.",
    tag: "Core Practice",
    tagColor: "#C9A84C",
  },
  {
    icon: "✦",
    iconColor: "#C9A0DC",
    title: "Monthly Intentions",
    subtitle: "What You're Calling In vs. Releasing",
    description:
      "Set the tone for each lunar cycle. Separate what you're drawing toward you from what you're clearing away. Track whether your intentions align by month's end.",
    tag: "Intentionality",
    tagColor: "#C9A0DC",
  },
  {
    icon: "⊕",
    iconColor: "#7ED4A8",
    title: "The Cauldron",
    subtitle: "Manifestation Log & Signs Journal",
    description:
      "Cast your desires into the cauldron and watch them simmer. Log signs as they appear — synchronicities, symbols, shifts. The Cauldron holds what you're working toward and honors what's arriving.",
    tag: "Manifestation",
    tagColor: "#7ED4A8",
    featured: true,
  },
  {
    icon: "📖",
    iconColor: "#C9A0DC",
    title: "Grimoire Library",
    subtitle: "Your Personal Spell Collection",
    description:
      "Save your own spells, recipes, and workings exactly as you craft them. Organize by category, tag by intention, retrieve in a moment. This is your Book of Shadows, digitized.",
    tag: "Knowledge",
    tagColor: "#C9A0DC",
  },
  {
    icon: "◎",
    iconColor: "#C9A84C",
    title: "Monthly Chronicle",
    subtitle: "Completion Rates & Reflections",
    description:
      "See your practice from above. Completion rates, ritual frequency, moon phase alignment — not as productivity metrics, but as a record of devotion. The chronicle knows how dedicated you've been.",
    tag: "Reflection",
    tagColor: "#C9A84C",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal-card");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="relative z-10 py-32">
      {/* Section bg accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,160,220,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="ornament-line mb-6">
            <span className="font-cinzel text-xs text-gold/60 tracking-widest uppercase">
              The Five Pillars
            </span>
          </div>
          <h2 className="section-heading mb-6">
            Tools worthy of{" "}
            <span className="text-gradient-lavender">the Work</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Every feature built from a practitioner's actual needs — not productivity logic, not wellness trends. Magic requires precision. Grimoire provides it.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal-card grimoire-card p-8 transition-all duration-700 cursor-default group ${
                feature.featured
                  ? "md:col-span-2 lg:col-span-1 border-sage/30"
                  : ""
              }`}
              style={{
                opacity: 0,
                transform: "translateY(40px)",
                transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s, box-shadow 0.3s ease, border-color 0.3s ease`,
              }}
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className="font-cinzel text-[10px] tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{
                    color: feature.tagColor,
                    backgroundColor: `${feature.tagColor}18`,
                    border: `1px solid ${feature.tagColor}30`,
                  }}
                >
                  {feature.tag}
                </span>
                {feature.featured && (
                  <span className="font-cinzel text-[10px] text-sage tracking-wider">★ Signature Feature</span>
                )}
              </div>

              {/* Icon */}
              <div
                className="text-4xl mb-6 w-16 h-16 flex items-center justify-center rounded-2xl"
                style={{
                  color: feature.iconColor,
                  backgroundColor: `${feature.iconColor}15`,
                  textShadow: `0 0 20px ${feature.iconColor}80`,
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-cinzel text-xl font-semibold text-blush mb-2 group-hover:text-gradient-gold transition-all duration-300">
                {feature.title}
              </h3>
              <p
                className="font-garamond text-sm italic mb-4"
                style={{ color: feature.iconColor, opacity: 0.8 }}
              >
                {feature.subtitle}
              </p>

              {/* Description */}
              <p className="font-garamond text-base leading-relaxed text-blush/65">
                {feature.description}
              </p>

              {/* Bottom ornament */}
              <div
                className="mt-6 h-px w-12 transition-all duration-500 group-hover:w-full"
                style={{ background: `linear-gradient(to right, ${feature.iconColor}60, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Cosmic context callout */}
        <div className="mt-10 grimoire-card p-8 border-gold/20">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div
              className="text-5xl w-20 h-20 flex items-center justify-center rounded-full shrink-0"
              style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.2) 0%, transparent 80%)" }}
            >
              ✺
            </div>
            <div>
              <h3 className="font-cinzel text-xl font-semibold text-gold mb-2">
                Cosmic Context — Always Present
              </h3>
              <p className="font-garamond text-lg leading-relaxed text-blush/65">
                Every time you open a ritual log, Grimoire shows you the current moon phase and planetary hour. Not as decoration — as{" "}
                <em className="text-blush/85">context for the work</em>. Your magic is already in conversation with the sky.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .reveal-card.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .reveal-card:hover {
          box-shadow: 0 0 40px rgba(201,160,220,0.08);
          border-color: rgba(201,160,220,0.25);
        }
      `}</style>
    </section>
  );
}
