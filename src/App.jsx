import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ArticleCard from "./components/ArticleCard";
import MainNews from "./components/mainNews";
import Sidebar from "./components/Sidebar";
import Equipos from "./components/Equipos";

const noticiasData = [
  {
    id: 1,
    title:
      "¿Se va de Real Cartagena? Juan José Ramírez en la mira de otros equipos",
    summary:
      "El mediocampista cartagenero ha sido clave en el equipo heroico, pero su futuro es incierto ante el interés de otros clubes.",
    description:
      "Juan José 'El Colorado' Ramírez, de 22 años, llegó a Real Cartagena en enero de 2025 en calidad de préstamo desde Millonarios, con la mediación del alcalde Dumek Turbay. Su desempeño ha sido destacado, formando una dupla efectiva con Juan José Salcedo. Sin embargo, su rendimiento ha despertado el interés de otros equipos, lo que podría influir en su continuidad en el equipo heroico.",
    image:
      "https://www.eluniversal.com.co/resizer/v2/torneo-de-la-b-TBSWMSMBX5ABRHHZQO23RLLK4Y.JPG?auth=311fee6882a8a6b5456fd0985b3bdb3e61f20b0118bac5157dc41f8016854618&smart=true&width=1200&height=800&quality=70",
    category: "Fútbol local",
    author: "El Universal",
    readTime: "3 min",
    views: "870",
    publishedAt: "2025-06-06",
  },
  {
    id: 2,
    title: "Real Cartagena cae 2-3 ante Jaguares en el Torneo BetPlay",
    summary:
      "El equipo heroico no pudo sostener la ventaja y complica sus aspiraciones de ascenso en un partido cargado de goles.",
    description:
      "En un emocionante encuentro del Torneo BetPlay, Real Cartagena cayó 2-3 frente a Jaguares de Córdoba. A pesar de ir ganando 2-1 hasta el minuto 85, el equipo no logró mantener la ventaja. La derrota provocó la invasión del campo por parte de los hinchas, quienes increparon a los jugadores y al cuerpo técnico. La Dimayor sancionó al club con una multa y la suspensión parcial del estadio Jaime Morón.",
    image:
      "https://www.sanjuandemisamores.co/wp-content/uploads/2025/06/Real-Cartagena-cae-3-4-ante-Jaguares-y-complica-su-camino-a-la-final-del-Torneo-BetPlay.jpg",
    category: "Torneo BetPlay",
    author: "Futbolred",
    readTime: "2 min",
    views: "1.1k",
    publishedAt: "2025-04-21",
  },
  {
    id: 3,
    title: "Real Cartagena anuncia mejoras logísticas para sus partidos",
    summary:
      "La directiva del club implementará nuevos filtros y mejores procesos de ingreso para los hinchas en el estadio.",
    description:
      "Tras los incidentes ocurridos en el partido contra Jaguares, la directiva de Real Cartagena ha anunciado una serie de mejoras logísticas para garantizar la seguridad y comodidad de los aficionados. Estas incluyen la implementación de nuevos filtros de ingreso, optimización de procesos y mayor presencia de personal de seguridad en el estadio Jaime Morón.",
    image:
      "https://primertiempo.co/wp-content/uploads/2025/06/img_8630-1-860x684.jpg",
    category: "Clubes",
    author: "Primer Tiempo",
    readTime: "4 min",
    views: "530",
    publishedAt: "2025-06-04",
  },
];

function App() {
  return (
    <div className="relative min-h-screen flex flex-col text-gray-800 bg-gray-100">
      {/* Navbar */}
      <div className="w-full shadow bg-white text-gray-800 z-50 sticky top-0">
        <Navbar />
      </div>

      {/* Contenido principal */}
      <main className="flex flex-col lg:flex-row gap-6 w-full max-w-screen-xl mx-auto px-4 py-8 flex-grow">
        {/* Contenido principal */}
        <section className="flex-1 space-y-6">
          {/* Artículo principal */}
          <MainNews />

          {/* Noticias */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              Noticias
            </h3>
            <div className="relative flex overflow-x-auto overflow-y-hidden gap-4 pb-2 scroll-smooth snap-x">
              {noticiasData.map((noticia) => (
                <div key={noticia.id} className="snap-start shrink-0 w-80">
                  <div className="rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10 relative">
                    <ArticleCard article={noticia} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipos */}
          <h3 className="text-xl font-semibold mb-3 text-slate-700">
            Equipos Destacados
          </h3>
          <Equipos />
        </section>

        {/* Sidebar */}
        <Sidebar />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
