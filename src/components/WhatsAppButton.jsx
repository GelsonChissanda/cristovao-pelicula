import whatsapp from "../assets/whatsapp.png"

export default function WhatsAppButton() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/244932376136', '_blank', 'noreferrer');
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-neon-red text-black shadow-glow transition hover:scale-105 cursor-pointer border-none p-0"
      aria-label="WhatsApp"
      type="button"
    >
      <img src={whatsapp} alt="WhatsApp" className="h-8 w-8" />
    </button>
  );
}
