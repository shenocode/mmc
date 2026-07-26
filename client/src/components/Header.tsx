/**
 * Header navigation for Método MOVIC
 * Style: Organic, warm, grounded. Terracotta accent on sand/cream background.
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";

const navLinks = [
  { href: "#metodo", label: "O Método" },
  { href: "#pilares", label: "Pilares" },
  { href: "#programa", label: "Programa" },
  { href: "#estruturas", label: "Como Funciona" },
  { href: "#locais", label: "Locais" },
  { href: "#aplicacoes", label: "Aplicações" },
  { href: "#mediadora", label: "A Mediadora" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (!el) return;
    const headerOffset = window.innerWidth >= 1024 ? 80 : 64;
    const top =
      el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        mobileOpen
          ? "bg-[#2C2419]"
          : scrolled
            ? "bg-[#F5F0E8]/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2 group"
        >
          <span className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <img
              src={site.assets.logo}
              alt={site.shortName}
              className="h-[110%] w-[110%] max-w-none object-cover"
            />
          </span>
          <div className="flex flex-col items-start text-left leading-none">
            <span
              className={`font-logo text-xl font-bold tracking-wide transition-colors duration-300 ${
                mobileOpen || !scrolled
                  ? "text-[#F5F0E8]"
                  : "text-[#3D2E1C]"
              }`}
            >
              {site.shortName}
            </span>
            <span
              className={`text-[0.6rem] tracking-[0.2em] uppercase font-body font-medium transition-colors duration-300 ${
                mobileOpen || !scrolled
                  ? "text-[#EBD9A0]/80"
                  : "text-[#7A8B6F]"
              }`}
            >
              {site.tagline}
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#C4704B] after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? "text-[#3D2E1C]/80 hover:text-[#C4704B]"
                  : "text-[#F5F0E8]/90 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contato")}
            className="bg-[#C4704B] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#B06040] transition-all duration-300 hover:shadow-lg hover:shadow-[#C4704B]/20 active:scale-95"
          >
            Comece sua jornada
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden min-h-11 min-w-11 flex items-center justify-center transition-colors duration-300 ${
            mobileOpen || !scrolled ? "text-[#F5F0E8]" : "text-[#3D2E1C]"
          }`}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="lg:hidden bg-[#F5F0E8] border-t border-[#D4C5B0]/40"
          >
            <nav className="container py-4 flex flex-col" aria-label="Menu principal">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-base font-semibold text-[#3D2E1C] hover:text-[#C4704B] transition-colors py-3"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contato")}
                className="mt-3 mb-1 bg-[#C4704B] text-white px-5 py-3.5 rounded-full text-base font-medium hover:bg-[#B06040] transition-all duration-300 active:scale-95"
              >
                Comece sua jornada
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
