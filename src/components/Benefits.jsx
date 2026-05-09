import { motion } from 'framer-motion';

const benefits = [
  { title: 'Proteção UV', description: 'Barreira avançada contra raios solares agressivos.', icon: '☀️' },
  { title: 'Redução de Calor', description: 'Conforto térmico superior em todas as condições.', icon: '🔥' },
  { title: 'Mais Privacidade', description: 'Ambiente interno discreto e valorizado.', icon: '🛡️' },
  { title: 'Acabamento Profissional', description: 'Detalhes refinados com padrão de excelência.', icon: '✨' },
  { title: 'Instalação Rápida', description: 'Serviço ágil sem comprometer qualidade.', icon: '⚡' },
  { title: 'Materiais de Qualidade', description: 'Componentes premium para desempenho confiável.', icon: '🏁' },
];

export default function Benefits() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-red-400">Benefícios</p>
            <h2 className="text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">Vantagens que elevam seu carro e sua confiança.</h2>
            <p className="text-slate-300">Cada serviço é concebido para entregar tecnologia, segurança e estética premium ao seu veículo.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-card-black/80 p-6 shadow-neon transition hover:-translate-y-1 hover:border-red-500/30"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-red-900/20 text-2xl text-neon-red shadow-neon">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
