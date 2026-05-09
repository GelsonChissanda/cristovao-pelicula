import { motion } from 'framer-motion';

export default function Promo() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative overflow-hidden rounded-[2rem] border border-red-500/20 bg-[#150101]/90 px-8 py-14 shadow-glow"
        >
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-neon-red/20 to-transparent" />
          <div className="grid gap-8 lg:grid-cols-[0.95fr_0.55fr] items-center">
            <div className="space-y-4 text-white">
              <p className="text-sm uppercase tracking-[0.35em] text-red-300">Desconto Especial</p>
              <h2 className="text-5xl font-black uppercase tracking-[-0.05em] text-white sm:text-6xl">5% OFF</h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">Aproveite a promoção premium nas melhores soluções automotivas. Películas, GPS, alarmes e acessórios com acabamento de alto padrão.</p>
            </div>
            <div className="rounded-[2rem] border border-red-500/30 bg-black/70 p-8 text-center shadow-neon">
              <p className="text-sm uppercase tracking-[0.35em] text-red-300">Oferta disponível</p>
              <p className="mt-4 text-3xl font-bold text-white">Solicite agora</p>
              <a href="https://wa.me/244932376136" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-neon-red px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-glow transition hover:shadow-neon">
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
