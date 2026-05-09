import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const images = [
  {
    title: 'Película Premium',
    subtitle: 'Antes e depois',
    src: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'GPS e Detalhes',
    subtitle: 'Tecnologia integrada',
    src: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Alarme Automotivo',
    subtitle: 'Proteção total',
    src: 'https://images.unsplash.com/photo-1549921296-3e63a05ff88a?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Acessórios Premium',
    subtitle: 'Acabamento sofisticado',
    src: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=80',
  },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-red-400">Trabalhos</p>
          <h2 className="text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">Galeria de projetos com presença inspiradora.</h2>
          <p className="text-slate-300">Veja como transformamos carros comuns em veículos de alto impacto com filmes, tecnologias e acabamento premium.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {images.map((item, index) => (
            <motion.button
              key={item.title}
              onClick={() => setActive(item)}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black/50 p-0 text-left shadow-glow transition duration-300"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img src={item.src} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm uppercase tracking-[0.3em] text-red-300">{item.subtitle}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-red-600/30 bg-[#111] shadow-glow"
            >
              <button onClick={() => setActive(null)} className="absolute right-5 top-5 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-2xl text-white transition hover:bg-red-900/70">
                ×
              </button>
              <img src={active.src} alt={active.title} className="h-[80vh] w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-red-300">{active.subtitle}</p>
                <h3 className="mt-2 text-3xl font-bold text-white">{active.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
