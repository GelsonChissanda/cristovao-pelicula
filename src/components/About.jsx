import { motion } from 'framer-motion';
import imagem from "../assets/imagem.jpeg"

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-red-400">Sobre</p>
            <h2 className="text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">Expertise automotiva que nasceu para transformar veículos.</h2>
            <p className="text-slate-300">A Cristóvão Películas tem papel de liderança no mercado automotivo premium, entregando serviços sofisticados com precisão, confiança e atenção aos mínimos detalhes.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-card-black/80 p-6 shadow-neon">
                <p className="text-sm uppercase tracking-[0.35em] text-red-300">Experiência</p>
                <p className="mt-3 text-white">Anos de atuação com soluções de alta performance</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-card-black/80 p-6 shadow-neon">
                <p className="text-sm uppercase tracking-[0.35em] text-red-300">Qualidade</p>
                <p className="mt-3 text-white">Materiais premium e acabamento impecável em cada projeto</p>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] border border-red-600/30 bg-black/70 shadow-glow"
          >
            <img
              src={imagem}
              alt="Oficina automotiva"
              className="h-[420px] w-full object-contain object-center sm:h-[520px] sm:object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-3xl bg-black/70 px-6 py-4 text-white shadow-neon">
              <p className="text-sm uppercase tracking-[0.35em] text-red-300">Oficina</p>
              <p className="mt-2 text-lg font-semibold">Ambiente projetado para veículos de alto padrão</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
