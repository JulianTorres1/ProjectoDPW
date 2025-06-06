function Footer() {
  return (
    <footer className="bg-slate-800 text-white text-center py-6 border-t mt-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="font-bold text-lg mb-2">
          Copa Cartagena de Fútbol Base 2025
        </div>
        <div className="mb-2">
          <a
            href="#calendario"
            className="text-red-400 underline hover:text-red-300 transition-colors"
          >
            Ver calendario del torneo
          </a>
        </div>
        <div className="text-sm mb-2">
          Contacto:{" "}
          <a
            href="mailto:info@copacartagena.com"
            className="underline text-red-300 hover:text-red-400 transition-colors"
          >
            info@copacartagena.com
          </a>{" "}
          | Tel: +57 300 123 4567
        </div>
        <div className="text-xs text-slate-400">
          © 2025 - Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
