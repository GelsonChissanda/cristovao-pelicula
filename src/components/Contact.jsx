import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-card-black/80 p-10 shadow-glow">
            <p className="text-sm uppercase tracking-[0.35em] text-red-400">Contacto</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] text-white">Entre em contato e agende seu serviço agora.</h2>
            <p className="mt-4 max-w-xl text-slate-300">Nossa equipe está pronta para atender com rapidez e profissionalismo. Fale conosco via WhatsApp e descubra a experiência Cristóvão Películas.</p>

            <div className="mt-10 space-y-6">
              <div className="rounded-[1.75rem] border border-white/10 bg-black/60 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-red-300">Telefone</p>
                <p className="mt-2 text-lg text-white">+244 932 376 136</p>
                <p className="text-lg text-white">+244 957 651 253</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-black/60 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-red-300">Localização</p>
                <p className="mt-2 text-lg text-white">Benfica, Zona Verde 3</p>
                <p className="text-lg text-white">Rua 2 / Trav-4</p>
              </div>
            </div>

            <a href="https://wa.me/244932376136" className="mt-10 inline-flex items-center justify-center rounded-full bg-neon-red px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-glow transition hover:shadow-neon">
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.101876805865!2d-9.141545684823077!3d38.74647777957998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331aaf7e9b89%3A0x709e0f75940f42d1!2sBenfica%2C%20Lisbon!5e0!3m2!1sen!2sao!4v1700000000000!5m2!1sen!2sao"
              className="h-[560px] w-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
