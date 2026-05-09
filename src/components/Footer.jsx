export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-3">
          <p className="text-lg font-black uppercase tracking-[0.2em] text-white">Cristóvão Películas</p>
          <p className="max-w-md text-sm text-slate-400">Experiência premium em películas, GPS, alarmes e acessórios automotivos com acabamento de alto padrão.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <a href="#home" className="transition hover:text-white">Início</a>
          <a href="#services" className="transition hover:text-white">Serviços</a>
          <a href="#gallery" className="transition hover:text-white">Trabalhos</a>
          <a href="#contact" className="transition hover:text-white">Contacto</a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl px-6 text-center text-sm text-slate-500 lg:px-8">© 2026 Cristóvão Películas. Todos os direitos reservados.</div>
    </footer>
  );
}
