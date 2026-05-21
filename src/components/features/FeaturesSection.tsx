import { useEffect, useRef, useState } from "react";

const PLANETS = [
  { name: "Sun", symbol: "☀️", day: "Sunday", color: "#F59E0B", workings: ["Prosperity", "Success", "Healing", "Confidence"], herbs: ["Chamomile", "Cinnamon", "Frankincense"], crystals: ["Citrine", "Amber", "Tiger's Eye"], colors: ["Gold", "Yellow", "Amber"] },
  { name: "Moon", symbol: "🌙", day: "Monday", color: "#94A3B8", workings: ["Intuition", "Dreams", "Psychic Work", "Cleansing"], herbs: ["Mugwort", "Jasmine", "Lotus"], crystals: ["Moonstone", "Selenite", "Labradorite"], colors: ["Silver", "White", "Lavender"] },
  { name: "Mars", symbol: "🔴", day: "Tuesday", color: "#EF4444", workings: ["Protection", "Courage", "Banishing", "Victory"], herbs: ["Dragon's Blood", "Ginger", "Nettle"], crystals: ["Bloodstone", "Garnet", "Red Jasper"], colors: ["Red", "Scarlet", "Black"] },
  { name: "Mercury", symbol: "💜", day: "Wednesday", color: "#8B5CF6", workings: ["Communication", "Divination", "Business", "Travel"], herbs: ["Lavender", "Fennel", "Dill"], crystals: ["Agate", "Fluorite", "Citrine"], colors: ["Purple", "Violet", "Iridescent"] },
  { name: "Jupiter", symbol: "🔵", day: "Thursday", color: "#3B82F6", workings: ["Luck", "Wealth", "Expansion", "Wisdom"], herbs: ["Sage", "Nutmeg", "Cedar"], crystals: ["Amethyst", "Lapis Lazuli", "Turquoise"], colors: ["Blue", "Royal Purple", "Indigo"] },
  { name: "Venus", symbol: "💖", day: "Friday", color: "#EC4899", workings: ["Love", "Beauty", "Glamour", "Harmony"], herbs: ["Rose", "Vanilla", "Hibiscus"], crystals: ["Rose Quartz", "Emerald", "Jade"], colors: ["Pink", "Green", "Rose Gold"] },
  { name: "Saturn", symbol: "⚫", day: "Saturday", color: "#64748B", workings: ["Banishing", "Binding", "Boundaries", "Endings"], herbs: ["Patchouli", "Myrrh", "Cypress"], crystals: ["Obsidian", "Onyx", "Black Tourmaline"], colors: ["Black", "Dark Grey", "Indigo"] },
];

const MOON_PHASES = [
  { name: "New Moon", emoji: "🌑", energy: "Plant seeds. Set intentions. Begin what you've been postponing. The slate is clean.", color: "#C9A84C", workings: "New beginnings · Intention setting · Fresh starts · Manifestation planting" },
  { name: "Waxing Crescent", emoji: "🌒", energy: "Your intentions are stirring. Take the first actions. Call in allies and resources.", color: "#C9A0DC", workings: "Attraction · Growth spells · Building momentum · Calling things in" },
  { name: "First Quarter", emoji: "🌓", energy: "Push through resistance. Decisions must be made. Do the uncomfortable thing.", color: "#7ED4A8", workings: "Courage · Overcoming obstacles · Decision magic · Breaking through" },
  { name: "Waxing Gibbous", emoji: "🌔", energy: "Refine and adjust. Your work is nearly ripe. Tend the energy carefully.", color: "#C9A84C", workings: "Refinement · Patience work · Nurturing intentions · Fine-tuning" },
  { name: "Full Moon", emoji: "🌕", energy: "Peak power. Charge your tools. Amplify everything. Release what's complete.", color: "#F5D5E0", workings: "Full power rituals · Charging · Amplification · Divination · Release" },
  { name: "Waning Gibbous", emoji: "🌖", energy: "Gratitude and reflection. What came through? Begin releasing what no longer serves.", color: "#C9A0DC", workings: "Gratitude · Reflection · Gentle release · Processing results" },
  { name: "Last Quarter", emoji: "🌗", energy: "Cut cords. Break habits. This is the banishing window — use it.", color: "#EF4444", workings: "Banishing · Cord cutting · Habit breaking · Removing obstacles" },
  { name: "Waning Crescent", emoji: "🌘", energy: "Rest. Surrender. Let the cycle complete. Restore before the new begins.", color: "#64748B", workings: "Rest · Surrender · Shadow work · Purification · Letting go" },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activePlanet, setActivePlanet] = useState(0);
  const [activePhase, setActivePhase] = useState(4); // Full moon default

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal-card");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const planet = PLANETS[activePlanet];
  const phase = MOON_PHASES[activePhase];

  return (
    <section id="features" ref={sectionRef} className="relative z-10 py-32">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,160,220,0.05) 0%, transparent 60%)" }} />

      <div className="mx-auto max-w-6xl px-6 space-y-40">

        {/* ── SECTION HEADER ── */}
        <div className="text-center">
          <div className="ornament-line mb-6">
            <span className="font-cinzel text-xs text-gold/60 tracking-widest uppercase">What Lives Inside</span>
          </div>
          <h2 className="section-heading mb-6">
            Built for the way <span className="text-gradient-gold">magic actually works</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Not a habit tracker in a witch costume. Every feature exists because your practice demanded it.
          </p>
        </div>

        {/* ══════════════════════════════════════════════
            FEATURE 1 — PLANETARY MAGIC
        ══════════════════════════════════════════════ */}
        <div className="reveal-card" style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <div className="text-center mb-12">
            <span className="font-cinzel text-xs text-gold/60 tracking-widest uppercase px-4 py-1.5 rounded-full border border-gold/20 bg-gold/08">Planetary Magic</span>
            <h3 className="font-cinzel text-3xl md:text-4xl font-semibold text-blush mt-6 mb-4">
              Know <span className="text-gradient-gold">exactly</span> what the sky is saying — right now
            </h3>
            <p className="font-garamond text-xl text-blush/65 max-w-2xl mx-auto leading-relaxed">
              Seven planets. Seven days. Twenty-four hours, each ruled by a different force. Grimoire tracks it all in real time — so when you open the app, you're not guessing what energy is available. You know.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Planet selector */}
            <div>
              <p className="font-cinzel text-xs text-blush/40 tracking-widest uppercase mb-4">Select a planet</p>
              <div className="grid grid-cols-7 gap-2 mb-6">
                {PLANETS.map((p, i) => (
                  <button
                    key={p.name}
                    onClick={() => setActivePlanet(i)}
                    className="flex flex-col items-center gap-1.5 py-3 px-1 rounded-xl border transition-all duration-300"
                    style={{
                      borderColor: activePlanet === i ? p.color + "60" : "rgba(255,255,255,0.06)",
                      background: activePlanet === i ? p.color + "15" : "rgba(255,255,255,0.02)",
                      boxShadow: activePlanet === i ? `0 0 20px ${p.color}20` : "none",
                    }}
                  >
                    <span className="text-lg">{p.symbol}</span>
                    <span className="font-cinzel text-[8px] tracking-wider" style={{ color: activePlanet === i ? p.color : "#F5D5E060" }}>{p.day.slice(0, 3)}</span>
                  </button>
                ))}
              </div>

              {/* Planet detail card */}
              <div
                className="grimoire-card p-6 transition-all duration-500"
                style={{ borderColor: planet.color + "30", boxShadow: `0 0 40px ${planet.color}10` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{planet.symbol}</span>
                  <div>
                    <p className="font-cinzel text-lg font-semibold text-blush">{planet.name}</p>
                    <p className="font-garamond text-sm italic" style={{ color: planet.color }}>{planet.day}</p>
                  </div>
                  <div className="ml-auto px-3 py-1 rounded-full text-[10px] font-cinzel tracking-wider" style={{ color: planet.color, background: planet.color + "18", border: `1px solid ${planet.color}30` }}>
                    Best Workings
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {planet.workings.map(w => (
                    <span key={w} className="text-xs font-cinzel px-3 py-1.5 rounded-full" style={{ color: planet.color, background: planet.color + "15", border: `1px solid ${planet.color}25` }}>{w}</span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Herbs", items: planet.herbs, color: "#7ED4A8", icon: "🌿" },
                    { label: "Crystals", items: planet.crystals, color: "#C9A0DC", icon: "💎" },
                    { label: "Colors", items: planet.colors, color: "#C9A84C", icon: "🎨" },
                  ].map(group => (
                    <div key={group.label}>
                      <p className="font-cinzel text-[9px] tracking-widest uppercase mb-2" style={{ color: group.color }}>
                        {group.icon} {group.label}
                      </p>
                      {group.items.map(item => (
                        <p key={item} className="font-garamond text-xs text-blush/55 leading-relaxed">{item}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Planetary hours callout */}
            <div className="space-y-4">
              <div className="grimoire-card p-6 border-gold/20">
                <div className="flex items-start gap-4">
                  <div className="text-3xl w-14 h-14 flex items-center justify-center rounded-2xl shrink-0" style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.2)" }}>⏱</div>
                  <div>
                    <h4 className="font-cinzel text-base font-semibold text-gold mb-2">Planetary Hours — Live</h4>
                    <p className="font-garamond text-base text-blush/65 leading-relaxed">
                      Every hour of every day is ruled by a planet. Grimoire calculates the current planetary hour in real time and shows it when you log a ritual — so your records capture not just the date, but the exact celestial moment you worked.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grimoire-card p-6 border-lavender/20">
                <div className="flex items-start gap-4">
                  <div className="text-3xl w-14 h-14 flex items-center justify-center rounded-2xl shrink-0" style={{ background: "rgba(201,160,220,0.10)", border: "1px solid rgba(201,160,220,0.2)" }}>🗓</div>
                  <div>
                    <h4 className="font-cinzel text-base font-semibold text-lavender mb-2">Always Context-Aware</h4>
                    <p className="font-garamond text-base text-blush/65 leading-relaxed">
                      Open the app on a Friday evening and Grimoire shows you Venus rules the day, what love and beauty workings are amplified right now, which herbs and crystals to reach for, and whether the planetary hour supports the spell you're planning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grimoire-card p-6" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(33,21,82,0.8) 100%)", borderColor: "rgba(201,168,76,0.2)" }}>
                <p className="font-cinzel-dec text-lg text-gold leading-relaxed" style={{ textShadow: "0 0 20px rgba(201,168,76,0.3)" }}>
                  "I opened it at 11pm on a Tuesday and it told me I was in a Mars hour. I'd been planning a protection ritual for weeks. I cast it right then."
                </p>
                <p className="font-garamond text-xs text-blush/35 mt-3 italic">— the kind of moment Grimoire is built for</p>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            FEATURE 2 — MOON PHASE TRACKER
        ══════════════════════════════════════════════ */}
        <div className="reveal-card" style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <div className="text-center mb-12">
            <span className="font-cinzel text-xs text-lavender/70 tracking-widest uppercase px-4 py-1.5 rounded-full border border-lavender/20 bg-lavender/08">Moon Tracker</span>
            <h3 className="font-cinzel text-3xl md:text-4xl font-semibold text-blush mt-6 mb-4">
              Eight phases. Eight different <span className="text-gradient-lavender">kinds of power</span>.
            </h3>
            <p className="font-garamond text-xl text-blush/65 max-w-2xl mx-auto leading-relaxed">
              The moon isn't just full or new. Each of the eight phases has a distinct energy, a distinct purpose, and a distinct window for different types of work. Grimoire tells you which one you're in — and what to do with it.
            </p>
          </div>

          {/* Phase wheel selector */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {MOON_PHASES.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActivePhase(i)}
                className="flex flex-col items-center gap-1 px-3 py-2.5 rounded-xl border transition-all duration-300"
                style={{
                  borderColor: activePhase === i ? p.color + "50" : "rgba(255,255,255,0.05)",
                  background: activePhase === i ? p.color + "12" : "rgba(255,255,255,0.02)",
                }}
              >
                <span className="text-xl">{p.emoji}</span>
                <span className="font-cinzel text-[7px] tracking-wider text-center leading-tight max-w-12" style={{ color: activePhase === i ? p.color : "#F5D5E050" }}>
                  {p.name.split(" ").map((word, wi) => <span key={wi} className="block">{word}</span>)}
                </span>
              </button>
            ))}
          </div>

          {/* Active phase card */}
          <div
            className="grimoire-card p-8 md:p-12 text-center max-w-3xl mx-auto transition-all duration-500"
            style={{ borderColor: phase.color + "30", boxShadow: `0 0 60px ${phase.color}10` }}
          >
            <div className="text-6xl mb-4" style={{ textShadow: `0 0 30px ${phase.color}60` }}>{phase.emoji}</div>
            <h4 className="font-cinzel text-2xl font-semibold mb-3" style={{ color: phase.color }}>{phase.name}</h4>
            <p className="font-garamond text-xl italic text-blush/80 mb-6 leading-relaxed max-w-lg mx-auto">{phase.energy}</p>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full" style={{ background: phase.color + "12", border: `1px solid ${phase.color}25` }}>
              <span className="font-cinzel text-[10px] tracking-widest uppercase" style={{ color: phase.color }}>Best For</span>
              <span className="font-garamond text-sm text-blush/70">{phase.workings}</span>
            </div>
          </div>

          <p className="font-garamond text-center text-base text-blush/40 italic mt-6">
            Grimoire always knows which phase you're in. It shows you this context every time you log.
          </p>
        </div>

        {/* ══════════════════════════════════════════════
            FEATURE 3 — RITUAL TRACKING
        ══════════════════════════════════════════════ */}
        <div className="reveal-card" style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-cinzel text-xs text-gold/60 tracking-widest uppercase px-4 py-1.5 rounded-full border border-gold/20 bg-gold/08">Ritual Tracking</span>
              <h3 className="font-cinzel text-3xl md:text-4xl font-semibold text-blush mt-6 mb-4">
                Your entire practice — <span className="text-gradient-gold">finally in one place</span>
              </h3>
              <p className="font-garamond text-xl text-blush/65 leading-relaxed mb-8">
                Schedule rituals to repeat daily, weekly, monthly, or with each moon phase. Cast one-time spells. Run consecutive-day sequences. Grimoire holds your full practice calendar and tracks everything without you having to remember.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "🗓", title: "Every schedule type", desc: "Daily practice, weekly work, moon phase rituals, one-time spells, multi-day sequences. Whatever your practice looks like, it fits." },
                  { icon: "📊", title: "Full history, always visible", desc: "Completion rates, streaks, how many times you've performed each working. The data of your devotion, right there." },
                  { icon: "🔮", title: "Practice categories you set", desc: "Pick your core pillars — Money Work, Protection, Love Work, whatever you focus on. The app tracks if you're actually doing them each month." },
                  { icon: "📅", title: "Week and month views", desc: "See your entire practice on a calendar. Know what's coming. Know what you missed. Plan around moon phases and planetary days." },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4 grimoire-card p-5">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-cinzel text-sm font-semibold text-gold mb-1">{item.title}</p>
                      <p className="font-garamond text-base text-blush/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mock practice view */}
            <div className="grimoire-card p-8 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-cinzel text-[10px] text-gold/50 tracking-widest uppercase mb-1">This Week</p>
                  <p className="font-cinzel text-base text-blush">May 19 – 25</p>
                </div>
                <div className="text-right">
                  <p className="font-cinzel text-xl font-bold text-gold">5/7</p>
                  <p className="font-cinzel text-[9px] text-blush/30 tracking-wider">COMPLETED</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { name: "Daily Grounding Practice", schedule: "Daily", status: "done", moon: "🌔", planet: "Venus Hour" },
                  { name: "Full Moon Abundance Ritual", schedule: "Moon Phase", status: "done", moon: "🌕", planet: "Moon Hour" },
                  { name: "Protection Cord Spell", schedule: "One Time", status: "done", moon: "🌖", planet: "Saturn Hour" },
                  { name: "Wednesday Mercury Work", schedule: "Weekly", status: "active", moon: "🌖", planet: "Mercury Hour" },
                  { name: "Friday Love Glamour", schedule: "Weekly", status: "upcoming", moon: "🌗", planet: "Venus Day" },
                ].map((ritual, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl p-3 border border-white/05" style={{ background: ritual.status === "done" ? "rgba(126,212,168,0.05)" : ritual.status === "active" ? "rgba(201,160,220,0.07)" : "rgba(255,255,255,0.02)" }}>
                    <span className={`w-2 h-2 rounded-full shrink-0 ${ritual.status === "done" ? "bg-sage" : ritual.status === "active" ? "bg-lavender animate-pulse" : "bg-blush/20"}`} />
                    <span className="text-base flex-1 font-garamond text-blush/80" style={{ textDecoration: ritual.status === "done" ? "line-through" : "none", opacity: ritual.status === "done" ? 0.5 : 1 }}>{ritual.name}</span>
                    <span className="font-cinzel text-[8px] text-blush/30 tracking-wider">{ritual.moon}</span>
                  </div>
                ))}
              </div>

              <div className="h-1.5 rounded-full bg-void-600 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: "71%", background: "linear-gradient(to right, #C9A84C, #7ED4A8)" }} />
              </div>

              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.10) 0%, transparent 70%)" }} />
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            FEATURE 4 — THE CAULDRON
        ══════════════════════════════════════════════ */}
        <div className="reveal-card" style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mock cauldron view */}
            <div className="grimoire-card p-8 border-sage/20 relative overflow-hidden order-2 lg:order-1">
              <div className="text-center mb-6">
                <div className="text-5xl mb-2" style={{ textShadow: "0 0 30px rgba(126,212,168,0.4)" }}>⊕</div>
                <p className="font-cinzel text-xs text-sage/60 tracking-widest uppercase">The Cauldron</p>
              </div>

              <div className="space-y-4">
                {[
                  { intention: "Financial abundance — unexpected income", stage: "Spilled", stageEmoji: "⭐", color: "#7ED4A8", signs: 4, days: 47 },
                  { intention: "The right creative collaborator", stage: "Stirring", stageEmoji: "🌊", color: "#4EA8DE", signs: 2, days: 22 },
                  { intention: "Visibility in my work", stage: "Brewing", stageEmoji: "🪄", color: "#C9A0DC", signs: 1, days: 8 },
                ].map((item, i) => (
                  <div key={i} className="grimoire-card p-5" style={{ borderColor: item.color + "25" }}>
                    <div className="flex items-start justify-between mb-3">
                      <p className="font-garamond text-base italic text-blush/80 flex-1 pr-4 leading-relaxed">"{item.intention}"</p>
                      <span className="font-cinzel text-[9px] px-2 py-1 rounded-full shrink-0" style={{ color: item.color, background: item.color + "15", border: `1px solid ${item.color}25` }}>
                        {item.stageEmoji} {item.stage}
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-cinzel text-[9px] text-blush/30">{item.signs} signs logged</span>
                      <span className="font-cinzel text-[9px] text-blush/30">{item.days} days active</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl p-4 border border-sage/15" style={{ background: "rgba(126,212,168,0.06)" }}>
                <p className="font-cinzel text-[9px] tracking-widest text-sage/50 uppercase mb-1">Latest Sign</p>
                <p className="font-garamond text-sm text-blush/65 italic">"Found £200 I forgot I had. Waxing Gibbous in Taurus. Tuesday."</p>
              </div>

              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(126,212,168,0.10) 0%, transparent 70%)" }} />
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2">
              <span className="font-cinzel text-xs text-sage/70 tracking-widest uppercase px-4 py-1.5 rounded-full border border-sage/20 bg-sage/08">The Cauldron</span>
              <h3 className="font-cinzel text-3xl md:text-4xl font-semibold text-blush mt-6 mb-4">
                Cast it. Watch it <span className="text-gradient-lavender">move</span>.
              </h3>
              <p className="font-garamond text-xl text-blush/65 leading-relaxed mb-8">
                Every ritual with an intention automatically opens a Cauldron entry. You watch your desires move through three stages — Brewing, Stirring, Spilled — and you log the signs and synchronicities as they appear.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { stage: "🪄 Brewing", desc: "You've cast it. The energy is gathering. Nothing visible yet — but it's moving." },
                  { stage: "🌊 Stirring", desc: "Signs are arriving. Synchronicities. Numbers. Encounters. Log each one. The cauldron is active." },
                  { stage: "⭐ Spilled", desc: "It came through. You record exactly how, when, and what the conditions were. The record of proof." },
                ].map(item => (
                  <div key={item.stage} className="flex items-start gap-4">
                    <span className="font-cinzel text-sm text-sage mt-0.5 shrink-0 w-24">{item.stage}</span>
                    <p className="font-garamond text-base text-blush/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="grimoire-card p-5 border-sage/20">
                <p className="font-garamond text-base text-blush/70 italic leading-relaxed">
                  "Over time, you build evidence that your magic works. Not faith — <span className="text-sage not-italic font-semibold">evidence</span>. Your own documented record of what you cast and what arrived."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            FEATURE 5 — THE JOURNAL
        ══════════════════════════════════════════════ */}
        <div className="reveal-card" style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <div className="text-center mb-12">
            <span className="font-cinzel text-xs text-lavender/70 tracking-widest uppercase px-4 py-1.5 rounded-full border border-lavender/20 bg-lavender/08">The Journal</span>
            <h3 className="font-cinzel text-3xl md:text-4xl font-semibold text-blush mt-6 mb-4">
              Everything that crosses the threshold — <span className="text-gradient-lavender">written down</span>
            </h3>
            <p className="font-garamond text-xl text-blush/65 max-w-2xl mx-auto leading-relaxed">
              Not just ritual notes. Your dreams. The encounter that stopped you in your tracks. The thought that arrived at 3am. The vision you almost dismissed. Grimoire has a category for each — because your practice doesn't only happen during spellwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              { icon: "📖", title: "Reflection", desc: "After every ritual, write. How it felt, what you noticed, what shifted in the air. Your mood, your body, your state. These entries are tied to the exact moon phase and planetary hour of the moment you worked.", color: "#C9A84C", label: "Post-ritual" },
              { icon: "🌙", title: "Dream", desc: "Dreams talk louder during certain moon phases. Log them the moment you wake — Grimoire tags the phase, the date, the planetary context automatically. Patterns across months become impossible to ignore.", color: "#C9A0DC", label: "Overnight" },
              { icon: "👁️", title: "Encounter", desc: "The crow that appeared twice. The stranger who said the thing. The feeling in a room that had no explanation. Log it before the rational mind explains it away. This is where the real record lives.", color: "#7ED4A8", label: "Synchronicity" },
              { icon: "💡", title: "Insight", desc: "A knowing that arrived mid-meditation. A message from a card pull. A thought so clear it felt like it came from somewhere else. Insights are different from reflections — and Grimoire knows that.", color: "#94A3B8", label: "Received" },
            ].map(card => (
              <div key={card.title} className="grimoire-card p-7 group hover:border-opacity-100 transition-all duration-300" style={{ borderColor: card.color + "20" }}>
                <div className="flex items-start gap-5">
                  <div className="text-3xl w-13 h-13 flex items-center justify-center rounded-2xl shrink-0 p-3" style={{ background: card.color + "12", border: `1px solid ${card.color}20` }}>{card.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-cinzel text-base font-semibold text-blush">{card.title}</h4>
                      <span className="font-cinzel text-[8px] tracking-widest uppercase px-2 py-0.5 rounded-full" style={{ color: card.color, background: card.color + "18", border: `1px solid ${card.color}25` }}>{card.label}</span>
                    </div>
                    <p className="font-garamond text-sm leading-relaxed text-blush/60">{card.desc}</p>
                  </div>
                </div>
                <div className="mt-5 h-px transition-all duration-500 group-hover:w-full w-8 rounded-full" style={{ background: `linear-gradient(to right, ${card.color}60, transparent)` }} />
              </div>
            ))}
          </div>

          {/* Journal pull quote */}
          <div className="text-center">
            <div
              className="inline-block rounded-3xl border border-lavender/20 px-12 py-10 max-w-3xl"
              style={{ background: "linear-gradient(135deg, rgba(201,160,220,0.06) 0%, rgba(33,21,82,0.6) 100%)" }}
            >
              <p className="font-cinzel-dec text-2xl md:text-3xl text-lavender leading-relaxed" style={{ textShadow: "0 0 30px rgba(201,160,220,0.3)" }}>
                "A year from now, you'll open it and read your own magic back to yourself."
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-lavender/40 self-center" />
                <span className="text-lavender/60 text-xs">✦</span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-lavender/40 self-center" />
              </div>
              <p className="mt-4 font-garamond text-sm text-blush/40 italic">That's the grimoire. That's the whole point.</p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            FEATURE 6 — MONTHLY INTENTION CEREMONY
        ══════════════════════════════════════════════ */}
        <div className="reveal-card" style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-cinzel text-xs text-gold/60 tracking-widest uppercase px-4 py-1.5 rounded-full border border-gold/20 bg-gold/08">Monthly Intentions</span>
              <h3 className="font-cinzel text-3xl md:text-4xl font-semibold text-blush mt-6 mb-4">
                Begin each month as <span className="text-gradient-gold">ceremony</span>.
              </h3>
              <p className="font-garamond text-xl text-blush/65 leading-relaxed mb-8">
                Every month, Grimoire guides you through a four-step intention ceremony — not a goal-setting exercise. You name what you're calling in, what you're releasing, which rituals will anchor the work, and when you'll perform them. Then the month begins.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { step: "01", label: "Call In", question: "What do you want this month to bring?", color: "#C9A84C", icon: "✦" },
                  { step: "02", label: "Release", question: "What are you ready to leave behind?", color: "#C9A0DC", icon: "◌" },
                  { step: "03", label: "Anchor", question: "Which rituals will hold this work?", color: "#7ED4A8", icon: "⊕" },
                  { step: "04", label: "Schedule", question: "When will you begin?", color: "#94A3B8", icon: "☽" },
                ].map(step => (
                  <div key={step.step} className="flex items-center gap-5 grimoire-card p-4" style={{ borderColor: step.color + "20" }}>
                    <span className="font-cinzel text-[10px] text-blush/25 tracking-widest w-6 shrink-0">{step.step}</span>
                    <span className="text-base shrink-0" style={{ color: step.color }}>{step.icon}</span>
                    <div className="flex-1">
                      <span className="font-cinzel text-xs font-semibold tracking-wider" style={{ color: step.color }}>{step.label}</span>
                      <p className="font-garamond text-sm text-blush/55 italic mt-0.5">"{step.question}"</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-garamond text-base text-blush/50 italic leading-relaxed">
                When it's done, your intentions are set, your rituals are scheduled, and your month has intention baked into it from the first day.
              </p>
            </div>

            {/* Mock monthly card */}
            <div className="grimoire-card p-8 relative overflow-hidden" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-cinzel text-[10px] text-gold/50 tracking-widest uppercase mb-1">Monthly Ceremony</p>
                  <p className="font-cinzel text-xl text-blush">June 2026</p>
                </div>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.2)" }}
                >
                  ☽
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="rounded-xl p-4 border border-gold/15" style={{ background: "rgba(201,168,76,0.07)" }}>
                  <p className="font-cinzel text-[9px] tracking-widest text-gold/50 uppercase mb-1.5">Calling In</p>
                  <p className="font-garamond text-sm text-blush/75 italic leading-relaxed">"Financial stability that lets me create freely. Recognition for the work. Space to breathe."</p>
                </div>
                <div className="rounded-xl p-4 border border-lavender/15" style={{ background: "rgba(201,160,220,0.06)" }}>
                  <p className="font-cinzel text-[9px] tracking-widest text-lavender/50 uppercase mb-1.5">Releasing</p>
                  <p className="font-garamond text-sm text-blush/75 italic leading-relaxed">"Comparison. The need to justify my pace. Friendships that drain rather than nourish."</p>
                </div>
                <div className="rounded-xl p-4 border border-sage/15" style={{ background: "rgba(126,212,168,0.05)" }}>
                  <p className="font-cinzel text-[9px] tracking-widest text-sage/50 uppercase mb-1.5">Anchoring Rituals</p>
                  <div className="space-y-1.5 mt-1">
                    {["New Moon Abundance Ritual", "Friday Venus Work (×3)", "Daily Clarity Practice"].map(r => (
                      <div key={r} className="flex items-center gap-2">
                        <span className="text-sage text-xs">✦</span>
                        <p className="font-garamond text-xs text-blush/60">{r}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="h-full rounded-full" style={{ width: "25%", background: "linear-gradient(to right, #C9A84C, #C9A0DC)" }} />
              </div>
              <p className="font-cinzel text-[9px] text-blush/25 tracking-wider mt-2">3 of 12 rituals complete</p>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.10) 0%, transparent 70%)" }} />
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            FEATURE 7 — GRIMOIRE LIBRARY
        ══════════════════════════════════════════════ */}
        <div className="reveal-card" style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mock library */}
            <div className="grimoire-card p-8 relative overflow-hidden order-2 lg:order-1" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-cinzel text-[10px] text-gold/50 tracking-widest uppercase mb-1">Grimoire Library</p>
                  <p className="font-cinzel text-base text-blush">Your Book of Shadows</p>
                </div>
                <div className="text-3xl" style={{ textShadow: "0 0 15px rgba(201,168,76,0.4)" }}>📖</div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {["All", "Protection", "Love", "Money Work", "Divination", "Cleansing"].map((tag, i) => (
                  <span
                    key={tag}
                    className="font-cinzel text-[9px] tracking-wider px-3 py-1 rounded-full"
                    style={{
                      color: i === 0 ? "#C9A84C" : "#F5D5E050",
                      background: i === 0 ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${i === 0 ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-3">
                {[
                  { name: "Protection Cord Spell", tags: ["Warding", "Mars Hour"], moon: "Waning", color: "#EF4444" },
                  { name: "Rose Water Clarity Ritual", tags: ["Clarity", "Water"], moon: "New Moon", color: "#C9A0DC" },
                  { name: "Black Salt Boundary Work", tags: ["Banishing", "Saturn"], moon: "Waning", color: "#64748B" },
                  { name: "Honey Jar — Sweetening", tags: ["Love", "Venus Day"], moon: "Waxing", color: "#EC4899" },
                  { name: "Mirror Scrying Practice", tags: ["Divination", "Moon Hour"], moon: "Full", color: "#94A3B8" },
                ].map((spell, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-xl p-3.5 border border-white/05" style={{ background: "rgba(255,255,255,0.02)" }}>
                    <div className="w-1 h-10 rounded-full shrink-0" style={{ background: spell.color }} />
                    <div className="flex-1 min-w-0">
                      <p className="font-cinzel text-xs font-semibold text-blush truncate">{spell.name}</p>
                      <div className="flex gap-2 mt-1">
                        {spell.tags.map(tag => (
                          <span key={tag} className="font-cinzel text-[8px] text-blush/30 tracking-wider">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <span className="font-cinzel text-[8px] text-blush/25 tracking-wider shrink-0">{spell.moon}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/05 flex justify-between items-center">
                <span className="font-cinzel text-[9px] text-blush/25 tracking-wider">23 spells · 6 categories</span>
                <span className="font-cinzel text-[9px] text-gold/40 tracking-wider">+ New Spell</span>
              </div>

              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2">
              <span className="font-cinzel text-xs text-gold/60 tracking-widest uppercase px-4 py-1.5 rounded-full border border-gold/20 bg-gold/08">The Library</span>
              <h3 className="font-cinzel text-3xl md:text-4xl font-semibold text-blush mt-6 mb-4">
                Your Book of Shadows — <span className="text-gradient-gold">always in your pocket</span>
              </h3>
              <p className="font-garamond text-xl text-blush/65 leading-relaxed mb-8">
                Every spell you write, every working you develop, every ritual you adapt — stored in your own private library. Searchable. Tagged by element, planet, moon phase, and category. Your craft, codified.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "🏷️", title: "Your tags, your system", desc: "Category, moon phase, element, tradition, difficulty. You decide how it's organized. No one else's taxonomy forced on your practice." },
                  { icon: "🔍", title: "Searchable across everything", desc: "Find any spell by name, category, ingredient, or moon phase. Your library is always one tap from wherever you are in the app." },
                  { icon: "🔒", title: "Completely private", desc: "No syncing to a server. No sharing unless you choose. Your Book of Shadows lives on your device — and nowhere else." },
                  { icon: "📋", title: "Written in your words", desc: "No templated spells. No AI-generated content. Everything in the library is exactly as you wrote it, in your own voice, your own format." },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="font-cinzel text-sm font-semibold text-gold mb-1">{item.title}</p>
                      <p className="font-garamond text-base text-blush/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            FEATURE 8 — SACRED NOTIFICATIONS
        ══════════════════════════════════════════════ */}
        <div className="reveal-card" style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <div className="text-center mb-12">
            <span className="font-cinzel text-xs text-lavender/70 tracking-widest uppercase px-4 py-1.5 rounded-full border border-lavender/20 bg-lavender/08">Sacred Reminders</span>
            <h3 className="font-cinzel text-3xl md:text-4xl font-semibold text-blush mt-6 mb-4">
              The sky doesn't wait. <span className="text-gradient-lavender">Neither should you</span>.
            </h3>
            <p className="font-garamond text-xl text-blush/65 max-w-2xl mx-auto leading-relaxed">
              Grimoire notifies you before your rituals, before the moon shifts, and before rare celestial events that serious practitioners don't miss. All local. All private. Nothing on a server.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Ritual reminders */}
            <div>
              <p className="font-cinzel text-xs text-gold/50 tracking-widest uppercase mb-5">Ritual Reminders</p>
              <div className="space-y-4">
                {/* 3-day reminder */}
                <div
                  className="grimoire-card p-5"
                  style={{ borderColor: "rgba(201,168,76,0.25)", background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(13,7,32,0.8) 100%)" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.25)" }}>🔮</div>
                    <div>
                      <p className="font-cinzel text-xs text-gold tracking-wider mb-1.5">3 DAYS BEFORE</p>
                      <div className="rounded-xl px-4 py-3 mb-2" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <p className="font-garamond text-sm text-blush/80 italic">"🔮 Full Moon Abundance Ritual is in 3 days — prepare your space"</p>
                      </div>
                      <p className="font-garamond text-xs text-blush/40 leading-relaxed">Time to gather your materials. Consecrate your tools. Set the container before the peak.</p>
                    </div>
                  </div>
                </div>

                {/* Day-of reminder */}
                <div
                  className="grimoire-card p-5"
                  style={{ borderColor: "rgba(201,160,220,0.25)", background: "linear-gradient(135deg, rgba(201,160,220,0.06) 0%, rgba(13,7,32,0.8) 100%)" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ background: "rgba(201,160,220,0.15)", border: "1px solid rgba(201,160,220,0.25)" }}>✨</div>
                    <div>
                      <p className="font-cinzel text-xs text-lavender tracking-wider mb-1.5">DAY OF</p>
                      <div className="rounded-xl px-4 py-3 mb-2" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <p className="font-garamond text-sm text-blush/80 italic">"✨ Today is the day — Full Moon Abundance Ritual is scheduled for tonight"</p>
                      </div>
                      <p className="font-garamond text-xs text-blush/40 leading-relaxed">The ritual fires at your scheduled time. You don't have to remember. Grimoire holds that for you.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Celestial events */}
            <div>
              <p className="font-cinzel text-xs text-lavender/50 tracking-widest uppercase mb-5">Celestial Event Alerts</p>
              <div className="space-y-4 mb-5">
                {[
                  {
                    type: "Annular Solar Eclipse",
                    date: "February 17, 2026",
                    coverage: "Antarctica, South America",
                    emoji: "🌑",
                    color: "#C9A84C",
                    note: "Total darkness at midday. New Moon on steroids. Set intentions that are meant to last years.",
                  },
                  {
                    type: "Penumbral Lunar Eclipse",
                    date: "March 3, 2026",
                    coverage: "Americas, Europe, Africa",
                    emoji: "🌕",
                    color: "#C9A0DC",
                    note: "The shadow passes over the Full Moon. Release what's been lingering since last eclipse season.",
                  },
                  {
                    type: "Total Solar Eclipse",
                    date: "August 12, 2026",
                    coverage: "Europe, North Africa, Arctic",
                    emoji: "🌑",
                    color: "#EF4444",
                    note: "The rarest working window of the year. Practitioners who use it well feel it for months.",
                  },
                ].map((event, i) => (
                  <div key={i} className="grimoire-card p-5" style={{ borderColor: event.color + "25" }}>
                    <div className="flex items-start gap-4">
                      <span className="text-2xl shrink-0" style={{ textShadow: `0 0 15px ${event.color}60` }}>{event.emoji}</span>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <p className="font-cinzel text-xs font-semibold" style={{ color: event.color }}>{event.type}</p>
                          <span className="font-cinzel text-[8px] text-blush/25 tracking-wider shrink-0">{event.date}</span>
                        </div>
                        <p className="font-cinzel text-[8px] text-blush/30 tracking-wider mb-2">{event.coverage}</p>
                        <p className="font-garamond text-xs text-blush/55 italic leading-relaxed">{event.note}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl p-5 border border-white/08" style={{ background: "rgba(201,160,220,0.05)" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lavender text-sm">🔔</span>
                  <p className="font-cinzel text-xs text-lavender/70 tracking-wider">Always local. Always private.</p>
                </div>
                <p className="font-garamond text-sm text-blush/50 leading-relaxed">
                  Grimoire notifications never touch a server. They live on your device, fire on your schedule, and belong entirely to you. No data. No tracking. Just the reminder to show up for your practice.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .reveal-card.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
