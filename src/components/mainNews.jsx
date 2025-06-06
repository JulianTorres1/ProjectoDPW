import { Clock, Eye } from "lucide-react";

const Hero = () => {
  const featuredArticle = {
    id: 1,
    title:
      "Real Cartagena dejó escapar una gran oportunidad y cayó ante Jaguares en un partidazo",
    summary:
      "Real Cartagena sufrió un duro revés en casa al perder 3-4 ante Jaguares de Córdoba en un vibrante encuentro por la tercera fecha del Grupo A del Torneo BetPlay I-2025.",
    image: "public/img/MainNew.jpg",
    description:
      "Real Cartagena sufrió un duro revés en casa al perder 3-4 ante Jaguares de Córdoba en un vibrante encuentro por la tercera fecha del Grupo A del Torneo BetPlay I-2025. Ante un estadio Jaime Morón repleto, el equipo heroico no logró sostener su ventaja en dos ocasiones y terminó cediendo puntos clave en su lucha por llegar a la final.\nEl cuadro cartagenero se adelantó temprano con gol de Juan David Rodríguez, pero Jaguares respondió con ímpetu y logró igualar antes del descanso. En el complemento, el intercambio de goles mantuvo al público al borde del asiento: El Chocolo puso el 2-1, pero Rentería y Altamiranda dieron vuelta el marcador. Ignacio Pereira revivió la ilusión con el 3-3, pero un penal en los minutos finales sentenciado por Wilmar Roldán le dio el triunfo definitivo a la visita.\nCon esta derrota, Real Cartagena se queda con 6 puntos y ve reducidas sus posibilidades de alcanzar la final, mientras Jaguares lidera con 9 unidades y la ventaja deportiva. El equipo de Cardetti ahora está obligado a ganar todo lo que queda y esperar un traspié de los cordobeses para mantener vivas sus aspiraciones. La próxima cita será en Montería, el 7 de junio, en un duelo que promete ser decisivo.",
    category: "Campeonato",
    readTime: "3 min de lectura",
    views: "2.3M",
    publishedAt: "hace 2 horas",
  };

  const sideArticles = [
    {
      id: 1,
      title:
        "Hinchas del Real Cartagena llenan el Jaime Morón en apoyo al equipo",
      image:
        "https://images.pexels.com/photos/3991876/pexels-photo-3991876.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Afición",
      publishedAt: "hace 2 horas",
    },
    {
      id: 2,
      title: "Joven cartagenero ficha por club de la primera división",
      image:
        "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Fichajes",
      publishedAt: "hace 3 horas",
    },
  ];

  return (
    <section className=" py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Artículo principal */}
          <div className="lg:col-span-2">
            <article className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredArticle.category}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{featuredArticle.views}</span>
                      </div>
                      <span>{featuredArticle.publishedAt}</span>
                    </div>
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    {featuredArticle.title}
                  </h1>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {featuredArticle.summary}
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* Artículos secundarios */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Tendencias ahora
            </h2>
            {sideArticles.map((article) => (
              <article
                key={article.id}
                className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex space-x-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-24 h-24 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {article.publishedAt}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 leading-tight group-hover:text-red-600 transition-colors duration-200">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
