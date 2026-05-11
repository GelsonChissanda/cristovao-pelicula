import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import carro from "../assets/hero-car.jpeg";
import video1 from "../assets/video1.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import premium from "../assets/premium.jpeg";
import processo from "../assets/processo.mp4";
import resultado from "../assets/resultado.jpeg"
import modelo from "../assets/modelo.jpeg"

const medias = [
  { type: "video", src: video1, duration: 3000 },
  { type: "video", src: processo, duration: 3000 },
  { type: "image", src: resultado, duration: 3000 },
  { type: "video", src: video3, duration: 3000 },
  { type: "video", src: video4, duration: 3000 },
  { type: "image", src: premium, duration: 3000 },

];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentMedia = medias[currentIndex];
    let timer;

    if (currentMedia.type === 'image') {
      timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % medias.length);
      }, currentMedia.duration);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentIndex]);

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % medias.length);
  };

  const currentMedia = medias[currentIndex];

  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-neon-red/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="relative z-10 flex flex-col justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="inline-flex items-center gap-3 rounded-full border border-red-600/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-red-300 shadow-glow"
          >
            Premium Automotive Design
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="space-y-6"
          >
            <h1 className="max-w-3xl text-5xl font-black uppercase tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Cristóvão Películas
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              Eficiência em movimento. Serviços automotivos perfeitos sob medida para você.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a href="https://wa.me/244932376136?text=Ol%C3%A1%2C%20Crist%C3%B3v%C3%A3o%20Pel%C3%ADculas!%0ATenho%20interesse%20em%20agendar%20um%20servi%C3%A7o%20de%20aplica%C3%A7%C3%A3o%20de%20pel%C3%ADculas.%20Poderia%20me%20informar%20a%20disponibilidade%20e%20os%20pr%C3%B3ximos%20passos%3F" className="inline-flex items-center justify-center rounded-full bg-neon-red px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-neon transition hover:shadow-glow">
              Falar no WhatsApp
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-red-900/30">
              Ver Serviços
            </a>
          </motion.div>

          <div className="grid gap-4 rounded-3xl border border-white/10 bg-black/50 p-6 shadow-glow sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Velocidade de resposta</p>
              <p className="text-xl font-semibold text-white">Instalação expressa</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Detalhe premium</p>
              <p className="text-xl font-semibold text-white">Acabamento de elite</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-[2rem] border border-red-600/30 bg-black/40 shadow-neon" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/60 shadow-xl shadow-red-900/10 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="h-[360px] w-full sm:h-[560px]"
              >
                {currentMedia.type === 'video' ? (
                  <video
                    key={currentMedia.src}
                    src={currentMedia.src}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={currentMedia.src}
                    alt="Carro premium"
                    className="h-full w-full object-cover"
                  />
                )}
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-3xl border border-red-500/40 bg-black/60 px-6 py-4 text-white shadow-glow">
              <p className="text-xs uppercase tracking-[0.3em] text-red-300">Automotive tuning</p>
              <h2 className="mt-2 text-2xl font-bold">Luxo, controle e precisão.</h2>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}