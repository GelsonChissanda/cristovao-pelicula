import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Gallery from './components/Gallery.jsx';
import Benefits from './components/Benefits.jsx';
import Promo from './components/Promo.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,45,85,0.12),_transparent_22%),_linear-gradient(180deg,_#050505_0%,_#070707_100%)] text-white">
      <Navbar />
      <main className="relative overflow-hidden">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Hero />
          </motion.div>
        </AnimatePresence>
        <Services />
        <Gallery />
        <Benefits />
        <Promo />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
