/**
 * Header navigation for MMC site
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
  { href: "#aplicacoes", label: "Aplicações" },
  { href: "#formacao", label: "Formação" },
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
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
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
          <img
            src="/manus-storage/logo-mmc_58a8ff03.png"
            alt="MMC"
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold text-[#3D2E1C]">
              MMC
            </span>
            <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#7A8B6F] font-body font-medium">
              Método Movimento Cotidiano
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-[#3D2E1C]/80 hover:text-[#C4704B] transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#C4704B] after:transition-all after:duration-300 hover:after:w-full"
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
          className="lg:hidden p-2 text-[#3D2E1C]"
          aria-label="Menu"
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
            className="lg:hidden bg-[#F5F0E8]/95 backdrop-blur-md border-t border-[#D4C5B0]"
          >
            <nav className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-base font-medium text-[#3D2E1C] hover:text-[#C4704B] transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contato")}
                className="bg-[#C4704B] text-white px-6 py-3 rounded-full text-sm font-medium mt-2"
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
