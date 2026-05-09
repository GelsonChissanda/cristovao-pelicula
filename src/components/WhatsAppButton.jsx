export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/244932376136"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-neon-red text-black shadow-glow transition hover:scale-105"
      aria-label="WhatsApp"
    >
      <span className="text-3xl">🟢</span>
    </a>
  );
}
