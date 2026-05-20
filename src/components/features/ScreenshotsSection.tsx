import { useState } from "react";
import appScreens from "@/assets/app-screens.png";

const screens = [
  {
    title: "Home — The Daily View",
    description:
      "Today's moon phase, upcoming rituals, and your active intentions at a glance. Not a dashboard. A portal.",
    color: "#C9A84C",
    mockupBg: "linear-gradient(135deg, #1a1040 0%, #0D0720 100%)",
    elements: [
      { label: "☽ Waxing Gibbous", sub: "Moon in Scorpio", color: "#C9A84C" },
      { label: "Daily Protection Ritual", sub: "Due today · 8 min", color: "#C9A0DC" },
      { label: "November Intentions", sub: "Calling in: Clarity, Abundance", color: "#7ED4A8" },
    ],
  },
  {
    title: "Ritual Log — Full Context",
    description:
      "Every ritual captured with moon phase, planetary hour, your intentions, and journal reflections. The full record.",
    color: "#C9A0DC",
    mockupBg: "linear-gradient(135deg, #1a0a30 0%, #0D0720 100%)",
    elements: [
      { label: "Full Moon in Taurus", sub: "Venus Hour · Nov 15, 2025", color: "#C9A84C" },
      { label: "Intention: Release comparison", sub: "Materials: Red candle, rose petals", color: "#C9A0DC" },
      { label: "✓ Completed", sub: "Reflection logged", color: "#7ED4A8" },
    ],
  },
  {
    title: "The Cauldron",
    description:
      "Your manifestation container. Cast, observe, receive. Log signs and synchronicities as the magic moves.",
    color: "#7ED4A8",
    mockupBg: "linear-gradient(135deg, #0a1a16 0%, #0D0720 100%)",
    elements: [
      { label: "⊕ Financial Abundance", sub: "Cast: New Moon Oct · 3 signs logged", color: "#7ED4A8" },
      { label: "Sign: Unexpected freelance offer", sub: "Nov 12 · Waxing Crescent", color: "#C9A0DC" },
      { label: "⊕ Creative Partnership", sub: "Cast: Samhain · Simmering", color: "#C9A84C" },
    ],
  },
  {
    title: "Grimoire Library",
    description:
      "Your spells, your words, your system. Tagged, searchable, and exactly as you wrote them.",
    color: "#C9A84C",
    mockupBg: "linear-gradient(135deg, #1a1500 0%, #0D0720 100%)",
    elements: [
      { label: "Protection Cord Spell", sub: "Warding · Moon: Waning", color: "#C9A84C" },
      { label: "Rose Water Clarity Ritual", sub: "Clarity · Moon: New", color: "#C9A0DC" },
      { label: "Ancestor Communication", sub: "Samhain · Advanced", color: "#7ED4A8" },
    ],
  },
];

export default function ScreenshotsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative z-10 py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(201,160,220,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="ornament-line mb-6">
            <span className="font-cinzel text-xs text-gold/60 tracking-widest uppercase">
              The Experience
            </span>
          </div>
          <h2 className="section-heading mb-4">
            See the{" "}
            <span className="text-gradient-lavender">pages within</span>
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            Every screen designed to feel like opening a real grimoire — not launching an app.
          </p>
        </div>

        {/* Main screens image */}
        <div className="mb-16 relative">
          <img
            src={appScreens}
            alt="Grimoire App Screens"
            className="w-full max-w-4xl mx-auto rounded-2xl"
            style={{
              filter: "drop-shadow(0 0 60px rgba(201,160,220,0.15))",
              opacity: 0.95,
            }}
          />
        </div>

        {/* Interactive screen showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Tabs */}
          <div className="space-y-3">
            {screens.map((screen, i) => (
              <button
                key={screen.title}
                onClick={() => setActive(i)}
                className={`w-full text-left grimoire-card p-6 transition-all duration-300 ${
                  active === i ? "border-opacity-100" : "opacity-60 hover:opacity-80"
                }`}
                style={{
                  borderColor: active === i ? `${screen.color}50` : undefined,
                  boxShadow: active === i ? `0 0 30px ${screen.color}15` : undefined,
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-1 self-stretch rounded-full shrink-0"
                    style={{
                      background: active === i ? screen.color : "transparent",
                    }}
                  />
                  <div>
                    <p
                      className="font-cinzel text-sm font-semibold mb-1"
                      style={{ color: active === i ? screen.color : "#F5D5E0" }}
                    >
                      {screen.title}
                    </p>
                    <p className="font-garamond text-sm text-blush/60 leading-snug">
                      {screen.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-64 h-[520px] rounded-[3rem] border-2 border-lavender/20 overflow-hidden"
              style={{
                background: screens[active].mockupBg,
                boxShadow: `0 0 60px ${screens[active].color}25, 0 40px 80px rgba(0,0,0,0.6)`,
                transition: "box-shadow 0.5s ease",
              }}
            >
              {/* Phone notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-void/80 z-10" />

              {/* Screen content */}
              <div className="absolute inset-0 p-6 pt-14 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="font-cinzel text-[9px] tracking-widest text-blush/40 uppercase mb-1">
                      Grimoire
                    </p>
                    <p className="font-cinzel text-sm font-semibold text-blush">
                      {screens[active].title.split(" — ")[0]}
                    </p>
                  </div>
                  <span
                    className="text-xl"
                    style={{ color: screens[active].color, textShadow: `0 0 10px ${screens[active].color}80` }}
                  >
                    ☽
                  </span>
                </div>

                {/* Elements */}
                <div className="space-y-3 flex-1">
                  {screens[active].elements.map((el, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-4 border border-white/5"
                      style={{ background: `${el.color}10` }}
                    >
                      <p
                        className="font-cinzel text-xs font-semibold mb-1"
                        style={{ color: el.color }}
                      >
                        {el.label}
                      </p>
                      <p className="font-garamond text-xs text-blush/55 leading-relaxed">
                        {el.sub}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-4 pt-4 border-t border-white/5 flex justify-around">
                  {["☽", "✦", "⊕", "📖"].map((icon, i) => (
                    <button
                      key={i}
                      className={`text-base ${i === active ? "" : "opacity-30"}`}
                      style={i === active ? { color: screens[active].color } : {}}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inner glow */}
              <div
                className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${screens[active].color}15 0%, transparent 70%)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
