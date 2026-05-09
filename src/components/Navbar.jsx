import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Início', href: '#home' },
  { label: 'Serviços', href: '#services' },
  { label: 'Trabalhos', href: '#gallery' },
  { label: 'Sobre', href: '#about' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl bg-black/55 border-b border-red-700/10' : 'bg-transparent'}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-lg font-extrabold tracking-[0.2em] text-white">
          Cristóvão <span className="text-neon-red">Películas</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm uppercase tracking-[0.2em] text-slate-200 transition hover:text-white">
              {item.label}
            </a>
          ))}
          <a href="https://wa.me/244932376136" className="rounded-full bg-neon-red px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-neon transition hover:shadow-glow">
            Marcar Agora
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl">{open ? '×' : '☰'}</span>
        </button>
      </div>

      <div className={`md:hidden ${open ? 'block' : 'hidden'} px-6 pb-6`}> 
        <div className="rounded-3xl border border-red-700/20 bg-black/85 p-5 shadow-glow">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="block py-3 text-base uppercase tracking-[0.2em] text-slate-200 transition hover:text-white" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="https://wa.me/244932376136?text=Ol%C3%A1%2C%20Crist%C3%B3v%C3%A3o%20Pel%C3%ADculas!%0ATenho%20interesse%20em%20agendar%20um%20servi%C3%A7o%20de%20aplica%C3%A7%C3%A3o%20de%20pel%C3%ADculas.%20Poderia%20me%20informar%20a%20disponibilidade%20e%20os%20pr%C3%B3ximos%20passos%3F" className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-neon-red px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-neon hover:shadow-glow">
            Marcar Agora
          </a>
        </div>
      </div>
    </motion.header>
  );
}
