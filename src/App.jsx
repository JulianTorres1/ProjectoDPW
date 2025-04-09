import Navbar from './components/navbar';
import Footer from './components/footer';
import Header from './components/header';
import Noticias from './components/noticia';
import noticiasFutbol from './temporalStatic/noticias';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Header */}
      <div className="w-full">
        <Header />
      </div>

      {/* Navbar */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Contenido principal que crece */}
      <main className="flex flex-col lg:flex-row gap-4 w-full px-4 py-6 flex-grow">
        <section className="flex-1 px-2">
          <article className="bg-white p-4 shadow mb-4">
            <h2 className="text-xl font-bold mb-2">Artículo principal</h2>
            <p>Contenido del artículo principal de la página.</p>
          </article>

          {/* Noticias*/}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-3">Últimas Noticias</h3>
            <div className="flex overflow-x-auto pb-4 gap-4">
              <Noticias noticias={noticiasFutbol.slice(0, 3)} />
            </div>
          </div>

          <div className="bg-white p-3 shadow">
            <h3 className="font-bold mb-2">Galería</h3>
            <p>Contenido de la galería de imágenes.</p>
          </div>
        </section>

        <aside className="w-full lg:w-1/4 bg-white p-4 shadow h-fit lg:sticky lg:top-20">
          <h3 className="font-bold mb-2">Aside</h3>
          <p>Contenido adicional, publicidad o enlaces.</p>
        </aside>
      </main>

      {/* Footer siempre abajo */}
      <Footer />
    </div>
  );
}

export default App;