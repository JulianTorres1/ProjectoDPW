import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

export default function Noticias() {
  const vantaRef = useRef(null);
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      THREE,
      color: 0x909090,
      backgroundColor: 0xd9d9d9,
      points: 10.0,
      maxDistance: 20.0,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  useEffect(() => {
    // Simulación de noticias (esto puede venir de una API)
    setNoticias([
      {
        id: 1,
        titulo: "Real Cartagena ficha a joven promesa de la cantera local",
        resumen: "El club anunció la incorporación de un talentoso mediocampista de 18 años procedente de la Liga de Fútbol de Bolívar.",
        fecha: "10 de mayo de 2025",
        imagen: "/img/noticia1.jpg",
      },
      {
        id: 2,
        titulo: "Se reanuda el torneo regional Sub-20 en Turbaco",
        resumen: "Con gran expectativa, se reactivan los partidos del torneo juvenil que impulsa nuevos talentos en la región.",
        fecha: "9 de mayo de 2025",
        imagen: "/img/noticia2.jpg",
      },
      {
        id: 3,
        titulo: "Entrenador del Real Cartagena habla sobre la estrategia para la próxima fecha",
        resumen: "El míster analiza al rival y revela detalles clave para mantener el invicto en casa.",
        fecha: "8 de mayo de 2025",
        imagen: "/img/noticia3.jpg",
      },
    ]);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col text-gray-800">
      <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full -z-10" />

      <div className="w-full shadow-lg bg-blue-600 text-white z-10 sticky top-0">
        <Navbar />
      </div>

      <main className="flex flex-col w-full max-w-screen-xl mx-auto px-4 py-8 flex-grow">
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold">Noticias</h1>
          <p className="text-lg mt-2 text-gray-700 max-w-2xl mx-auto">
            Las últimas noticias del fútbol cartagenero. Entérate de fichajes, resultados, torneos locales y todo lo que ocurre con nuestros equipos y jugadores.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {noticias.map((noticia) => (
            <div key={noticia.id} className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{noticia.titulo}</h2>
                <p className="text-sm text-gray-600 mb-2">{noticia.fecha}</p>
                <p className="text-gray-700 text-base">{noticia.resumen}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
