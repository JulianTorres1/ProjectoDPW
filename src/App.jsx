import React, { useEffect, useRef } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Noticias from './components/noticia';
import noticiasFutbol from './temporalStatic/noticias';
import MainNews from './components/mainNews';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

function App() {
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
      if (vantaEffect) vantaEffect.destroy();
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
          <div className=''>
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Últimas Noticias</h3>
            <div className="relative flex overflow-x-auto overflow-y-hidden gap-4 pb-2 scroll-smooth snap-x">
              {noticiasFutbol.slice(0, 3).map((noticia, index) => (
                <div key={index} className="snap-start shrink-0 w-80">
                  <div className="rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10 relative">
                    <Noticias noticias={[noticia]} />
                  </div>
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
            </div>
          </div>
        </section>

      {/* Aside */}
      <aside className="w-full lg:w-1/4 bg-white p-6 rounded-2xl shadow-lg border border-gray-200 h-fit lg:sticky lg:top-24">
        <h3 className="text-lg font-semibold mb-3 text-blue-700">Contenido adicional</h3>
        <p className="text-gray-600 mb-4">Últimas noticias, enlaces útiles y más sobre el fútbol.</p>

        {/* Noticias destacadas */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-blue-700 mb-2">Noticias destacadas</h4>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-gray-600 text-center">Última hora: [noticia importante]</p>
          </div>
        </div>

        {/* Enlaces útiles */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-blue-700 mb-2">Enlaces útiles</h4>
          <ul className="list-none space-y-2">
            <li><a href="#" className="text-blue-600 hover:underline">Resultados en vivo</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Próximos partidos</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Clasificación de equipos</a></li>
          </ul>
        </div>

        {/* Estadísticas */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-blue-700 mb-2">Estadísticas recientes</h4>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-gray-600">Mejores jugadores, goles, y más...</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 text-center">
          <a href="#" className="inline-block bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Ver más estadísticas</a>
        </div>
      </aside>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
