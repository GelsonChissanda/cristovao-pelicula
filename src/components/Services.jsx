import { motion } from "framer-motion";
import laser from "../assets/laser.png";
import gps from "../assets/gps.png";
import alarme from "../assets/alarmee.png";
import material from "../assets/material.png";


const services = [
  {
    title: "Aplicação de Películas a Laser",
    description:
      "Proteção UV premium com acabamento impecável e controle térmico avançado",
    icon: laser,
  },
  {
    title: "Sistema de GPS",
    description:
      "Navegação inteligente e conectividade perfeita para trajetórias seguras",
    icon: gps,
  },
  {
    title: "Sistema de Alarme",
    description:
      "Segurança automotiva de alta tecnologia e alertas instantâneos",
    icon: alarme,
  },
  {
    title: "Chão Plástico Automotivo",
    description:
      "Acabamento resistente e sofisticado para proteger cada detalhe",
    icon: material,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-red-400">
            Serviços Premium
          </p>
          <h2 className="text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
            Soluções exclusivas para cada detalhe do seu carro.
          </h2>
          <p className="text-slate-300">
            Desde películas automotivas de alto desempenho até alarmes
            sofisticados, criamos uma experiência automotiva completa e
            personalizada.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group rounded-[2rem] border border-white/10 bg-card-black/80 p-7 shadow-neon transition duration-500 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-glow"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-red-900/20 text-2xl text-neon-red shadow-neon">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-10 w-10 object-contain cursor-pointer"
                />
              </div>
              <h3 className="mb-3 text-2xl font-semibold tracking-tight text-white">
                {service.title}
              </h3>
              <p className="text-slate-400">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
