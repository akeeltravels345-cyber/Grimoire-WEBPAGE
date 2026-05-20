export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-lavender/10 bg-void/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="text-gold text-xl">☽</span>
            <span className="font-cinzel-dec text-lg font-bold text-blush tracking-wider">
              Grimoire
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="font-cinzel text-xs text-blush/40 hover:text-lavender transition-colors tracking-wider"
            >
              Privacy Policy
            </a>
            <a
              href="mailto:hello@grimoire.app"
              className="font-cinzel text-xs text-blush/40 hover:text-lavender transition-colors tracking-wider"
            >
              hello@grimoire.app
            </a>
          </div>

          {/* Copyright */}
          <p className="font-garamond text-sm text-blush/30 italic">
            © 2026 Grimoire. Your magic, yours alone.
          </p>
        </div>

        {/* Ornament */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold/30" />
          <span className="text-gold/40 text-xs">✦ ✦ ✦</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold/30" />
        </div>
      </div>
    </footer>
  );
}
