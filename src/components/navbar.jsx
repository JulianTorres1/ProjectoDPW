import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LogoIcono from "../../public/img/LogoIcono.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [text, setText] = useState("");
  const fullText = "FUTBOL CARTAGENERO";
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  // Manejar el efecto de scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manejar el texto que se escribe dinámicamente
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 1) {
        setText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else {
        setIsDeleting((prev) => !prev);
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={LogoIcono} className="h-8" alt="Logo" />
          <span className="text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            {text}
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col p-4 mt-4 font-medium border rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:p-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                to="/"
                className="block px-3 py-2 text-white rounded hover:bg-blue-700"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/noticias"
                className="block px-3 py-2 text-white rounded hover:bg-blue-700"
              >
                Noticias
              </Link>
            </li>
            <li>
              <Link
                to="/calendario"
                className="block px-3 py-2 text-white rounded hover:bg-blue-700"
              >
                Calendario
              </Link>
            </li>
            <li>
              <Link
                to="/resultados"
                className="block px-3 py-2 text-white rounded hover:bg-blue-700"
              >
                Resultados
              </Link>
            </li>
            <li>
              <Link
                to="/equipos"
                className="block px-3 py-2 text-white rounded hover:bg-blue-700"
              >
                Equipos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
