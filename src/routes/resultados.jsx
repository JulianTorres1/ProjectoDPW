import React, { useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NET from "vanta/dist/vanta.net.min"; // Puedes cambiar 'net' por otro efecto
import * as THREE from "three";

export default function Resultados() {
  const vantaRef = useRef(null);

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
      if (vantaEffect) vantaEffect.destroy(); // Limpia el efecto al desmontar
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col text-gray-800">
      {/* Fondo de Vanta.js */}
      <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full -z-10"></div>

      {/* Navbar */}
      <div className="w-full shadow-lg bg-blue-600 text-white z-10 sticky top-0">
        <Navbar />
      </div>

      {/* Contenido principal */}
      <main className="flex flex-col w-full max-w-screen-xl mx-auto px-4 py-8 flex-grow">
        <section className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-4xl font-bold mb-4">Resultados</h1>
          <p className="text-lg text-gray-700">
            Aquí puedes ver los resultados de los partidos más recientes del fútbol cartagenero. Mantente al tanto de los resultados y estadísticas de cada encuentro.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}