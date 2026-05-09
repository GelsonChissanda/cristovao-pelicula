import whatsapp from "../assets/whatsapp.png"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/244932376136?text=Ol%C3%A1%2C%20Crist%C3%B3v%C3%A3o%20Pel%C3%ADculas!%0ATenho%20interesse%20em%20agendar%20um%20servi%C3%A7o%20de%20aplica%C3%A7%C3%A3o%20de%20pel%C3%ADculas.%20Poderia%20me%20informar%20a%20disponibilidade%20e%20os%20pr%C3%B3ximos%20passos%3F"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-neon-red text-black shadow-glow transition hover:scale-105"
      aria-label="WhatsApp"
    >
      <img src={whatsapp} alt="WhatsApp" className="h-8 w-8" />
    </a>
  );
}
