// filepath: /workspaces/ProjectoDPW/src/App.jsx
import React, { useEffect, useRef } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Noticias from './components/noticia';
import noticiasFutbol from './temporalStatic/noticias';
import MainNews from './components/mainNews';
import NET from 'vanta/dist/vanta.net.min'; // Puedes cambiar 'net' por otro efecto
import * as THREE from 'three';

function App() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      THREE, // Necesario para Vanta.js
      color: 0x909090, // Color principal (gris oscuro)
      backgroundColor: 0xd9d9d9, // Color de fondo (gris más oscuro)
      points: 10.0, // Configuración del efecto
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
      <main className="flex flex-col lg:flex-row gap-6 w-full max-w-screen-xl mx-auto px-4 py-8 flex-grow">
        {/* Contenido principal */}
        <section className="flex-1 space-y-6">
          {/* Artículo principal */}
          <MainNews
            titulo="Cuántos títulos tiene Cristiano Ronaldo en su carrera: Champions League, Premier, LaLiga"
            resumen="Cristiano Ronaldo es uno de los futbolistas más laureados de la historia. A lo largo de su carrera ha conseguido un gran número de títulos, tanto a nivel de clubes como con la selección de Portugal."
            enlace="https://www.directvsports.com/futbol/Cristiano-Ronaldo-llego-a-los-34-titulos-en-su-carrera-20210519-0060.html"
            imagen="https://www.directvsports.com/__export/1691602384970/sites/dsports/img/2023/08/09/cristiano.jpg_1273855039.jpg"
          />

          {/* Noticias */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Últimas Noticias</h3>
            <div className="flex overflow-x-auto gap-4 pb-2 scroll-smooth snap-x">
              {noticiasFutbol.slice(0, 3).map((noticia, index) => (
                <div key={index} className="snap-start shrink-0 w-80">
                  <Noticias noticias={[noticia]} />
                </div>
              ))}
            </div>
          </div>

          {/* Galería */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Galería</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-200 h-32 rounded-lg"></div>
              <div className="bg-gray-200 h-32 rounded-lg"></div>
              <div className="bg-gray-200 h-32 rounded-lg"></div>
              {/* Puedes reemplazar estos divs con <img /> */}
            </div>
          </div>
        </section>

        {/* Aside */}
        <aside className="w-full lg:w-1/4 bg-white p-6 rounded-2xl shadow-lg border border-gray-200 h-fit lg:sticky lg:top-24">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">Contenido adicional</h3>
          <p className="text-gray-600">Publicidad, enlaces, o widgets útiles.</p>
        </aside>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;