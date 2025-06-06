import { TrendingUp, Users, Calendar, Mail } from "lucide-react";

const Sidebar = () => {
  // Temas relevantes y actuales para el torneo y fútbol en Cartagena
  const trendingTopics = [
    {
      name: "Real Cartagena dejó escapar ante Jaguares",
      posts: "Último partido",
    },
    { name: "Copa Cartagena de Fútbol Base 2025", posts: "Torneo juvenil" },
    { name: "Academia Élite vs Los Cracks", posts: "Próximo partido" },
    { name: "Festival de Verano en Bocagrande", posts: "Evento local" },
    { name: "Liga de Fútbol de Bolívar", posts: "Competencias regionales" },
  ];

  const popularAuthors = [
    { name: "Sarah Johnson", specialty: "Basketball", followers: "125K" },
    { name: "Mike Rodriguez", specialty: "Football", followers: "98K" },
    { name: "Emma Thompson", specialty: "Soccer", followers: "87K" },
  ];

  return (
    <aside className="bg-gray-50 p-6 space-y-8 px-8 shadow-4xl rounded-2xl">
      {/* Page Title */}
      <h2 className="text-xl font-semibold leading-tight tracking-tight text-gray-900">
        Copa Cartagena 2025
      </h2>

      {/* Main Menu */}
      <nav>
        <ul className="space-y-2">
          <li>
            <a
              href="#noticia-principal"
              className="block text-base font-bold text-gray-900 transition-colors duration-200 hover:text-red-600"
            >
              Último Partido
            </a>
          </li>
          <li>
            <a
              href="#equipos"
              className="block text-base text-gray-900 transition-colors duration-200 hover:text-red-600"
            >
              Equipos
            </a>
          </li>
          <li>
            <a
              href="#calendario"
              className="block text-base text-gray-900 transition-colors duration-200 hover:text-red-600"
            >
              Calendario
            </a>
          </li>
          <li>
            <a
              href="#premios"
              className="block text-base text-gray-900 transition-colors duration-200 hover:text-red-600"
            >
              Premios
            </a>
          </li>
        </ul>
      </nav>

      {/* Trending Topics */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-red-600" />
          <h3 className="text-lg font-bold text-gray-900">Tendencias</h3>
        </div>
        <div className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div
              key={topic.name}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <span className="text-sm font-bold text-gray-400 w-6">
                  {index + 1}
                </span>
                <span className="font-medium text-gray-900">{topic.name}</span>
              </div>
              <span className="text-sm text-gray-500">{topic.posts}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Suscripción al Boletín */}
      <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-2 mb-3">
          <Mail className="w-5 h-5" />
          <h3 className="font-bold">Resumen Deportivo Diario</h3>
        </div>
        <p className="text-red-100 mb-4 text-sm">
          Recibe las últimas noticias deportivas en tu correo cada mañana.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="w-full bg-white text-red-600 font-medium py-2 rounded-lg hover:bg-red-50 transition-colors duration-200">
            Suscribirse
          </button>
        </div>
      </div>

      {/* Upcoming Games */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="w-5 h-5 text-red-600" />
          <h3 className="text-lg font-bold text-gray-900">Próximos Partidos</h3>
        </div>
        <div className="space-y-3">
          <div className="p-3 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-900">
                Academia Élite vs Los Cracks
              </span>
              <span className="text-sm text-gray-500">Sáb 5 Jul</span>
            </div>
            <div className="text-sm text-gray-600">4:00 pm · Cancha Crespo</div>
          </div>
          <div className="p-3 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-900">
                Perlazas FC vs Heroicos
              </span>
              <span className="text-sm text-gray-500">Sáb 5 Jul</span>
            </div>
            <div className="text-sm text-gray-600">6:00 pm · San Fernando</div>
          </div>
        </div>
      </div>

      {/* Calendar Summary */}
      <section id="calendario" className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Calendario</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li className="text-sm">05-26 julio: Fase de grupos y finales</li>
          <li className="text-sm">Final: 26 de julio, 6:00 pm</li>
        </ul>
        <a
          href="#calendario-detalle"
          className="text-sm text-red-600 hover:underline"
        >
          Ver detalles
        </a>
      </section>

      {/* Contact Information */}
      <footer className="border-t border-gray-200 pt-4">
        <h4 className="text-base font-semibold text-gray-900 mb-2">Contacto</h4>
        <p className="text-sm text-gray-700">
          Email:{" "}
          <a
            href="mailto:info@copacartagena.com"
            className="text-red-600 hover:underline"
          >
            info@copacartagena.com
          </a>
        </p>
        <p className="text-sm text-gray-700">
          Tel:{" "}
          <a href="tel:+573001234567" className="text-red-600 hover:underline">
            +57 300 123 4567
          </a>
        </p>
      </footer>
    </aside>
  );
};

export default Sidebar;
