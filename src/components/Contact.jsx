import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-card-black/80 p-10 shadow-glow">
            <p className="text-sm uppercase tracking-[0.35em] text-red-400">
              Contacto
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] text-white">
              Entre em contato e agende seu serviço agora.
            </h2>
            <p className="mt-4 max-w-xl text-slate-300">
              Nossa equipe está pronta para atender com rapidez e
              profissionalismo. Fale conosco via WhatsApp e descubra a
              experiência Cristóvão Películas..
            </p>

            <div className="mt-10 space-y-6">
              <div className="rounded-[1.75rem] border border-white/10 bg-black/60 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-red-300">
                  Telefone
                </p>
                <p className="mt-2 text-lg text-white">+244 932 376 136</p>
                <p className="text-lg text-white">+244 957 651 253</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-black/60 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-red-300">
                  Localização
                </p>
                <p className="mt-2 text-lg text-white">Benfica, Zona Verde 3</p>
                <p className="text-lg text-white">Rua 2 / Trav-4</p>
              </div>
            </div>

            <a
              href="https://wa.me/244932376136?text=Ol%C3%A1%2C%20Crist%C3%B3v%C3%A3o%20Pel%C3%ADculas!%0ATenho%20interesse%20em%20agendar%20um%20servi%C3%A7o%20de%20aplica%C3%A7%C3%A3o%20de%20pel%C3%ADculas.%20Poderia%20me%20informar%20a%20disponibilidade%20e%20os%20pr%C3%B3ximos%20passos%3F"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-neon-red px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-glow transition hover:shadow-neon"
            >
              Conversar no WhatsApp
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/70 shadow-glow"
          >
            <iframe
  title="Mapa Cristóvão Películas"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252256.93428746864!2d13.039624700000003!3d-8.924635799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a521f000463b51f%3A0x21dab6c22ee97b7a!2sBENFICA%20ZONA%20VERDE%203!5e0!3m2!1spt-PT!2sao!4v1778324714051!5m2!1spt-PT!2sao"
  className="h-[560px] w-full border-0"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
