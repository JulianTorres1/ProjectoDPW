import React, { useState } from "react";

const footballSchools = [
  {
    id: 1,
    name: "Academia de Fútbol Élite Cartagena",
    description:
      "Escuela sin ánimo de lucro que forma integralmente a niños en situación vulnerable, inculcando valores sociales, éticos y morales.",
    fullDescription:
      "Es una escuela de formación deportiva sin ánimo de lucro; cuyo objetivo primordial es aportar en el proceso de formación de niños y adolescentes integrales en la práctica del fútbol, inculcando valores sociales, éticos y morales. Permitir que niños que viven en entornos sociales vulnerables tengan una oportunidad de desarrollo integral en la comunidad a través del deporte.",
    image:
      "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    name: "Los Cracks",
    description:
      "Escuela fundada en 2018, enfocada en la disciplina y proyección nacional e internacional. Entrenan categorías desde pony hasta sub-15.",
    fullDescription:
      "La Escuela de Fútbol Los Cracks, fundada en 2018, se ha establecido como una institución comprometida con la formación deportiva e integral de niños y niñas en Cartagena. Inicialmente ubicada en Castillogrande, actualmente opera en el barrio La Carolina, donde ha sido acogida positivamente por la comunidad. Bajo la dirección de Wilfrido De La Rosa y con entrenadores como Edinson Gómez, Jesús Consuegra y Jesús Jiménez, Los Cracks entrenan en categorías como pony, sub-9, sub-11, sub-13 y sub-15. Han participado en torneos nacionales en ciudades como Barranquilla y Santa Marta, obteniendo títulos y destacadas actuaciones. La escuela enfatiza la organización y la disciplina como claves del éxito, y busca proyectarse a nivel nacional e internacional. Con más de 90 niños en formación, Los Cracks continúan trabajando para ofrecer oportunidades a jóvenes talentos del fútbol.",
    image:
      "https://images.pexels.com/photos/3991876/pexels-photo-3991876.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    name: "Perlazas FC",
    description:
      "Escuela con enfoque en la formación técnica y táctica, activa en competencias organizadas por la Liga de Fútbol de Bolívar.",
    fullDescription:
      "Perlazas FC es una escuela de fútbol que ha emergido como una plataforma para el desarrollo de jóvenes futbolistas en Cartagena. Con un enfoque en la formación técnica y táctica, el club busca preparar a sus jugadores para competir en torneos locales y regionales. Aunque la información disponible sobre Perlazas FC es limitada, su participación en competencias organizadas por la Liga de Fútbol de Bolívar indica un compromiso con el crecimiento deportivo de sus integrantes. El club continúa trabajando para consolidarse como una opción destacada en la formación de talentos en la ciudad.",
    image:
      "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    name: "Los Heroicos de Bolívar",
    description:
      "Forman jóvenes atletas para fútbol competitivo, con énfasis en disciplina, trabajo en equipo y respeto.",
    fullDescription:
      "Heroicos FC es una escuela de fútbol en Cartagena dedicada a la formación de jóvenes atletas con aspiraciones profesionales. Su programa se centra en el desarrollo de habilidades técnicas, tácticas y físicas, preparando a los jugadores para enfrentar los desafíos del fútbol competitivo. El club participa activamente en torneos locales, brindando a sus jugadores la oportunidad de adquirir experiencia en competencias organizadas por la Liga de Fútbol de Bolívar. Heroicos FC también enfatiza la importancia de valores como la disciplina, el trabajo en equipo y el respeto dentro y fuera del campo. Con un equipo de entrenadores comprometidos, Heroicos FC continúa su labor en la identificación y desarrollo de talentos, contribuyendo al fortalecimiento del fútbol en Cartagena.",
    image:
      "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 5,
    name: "Academia de Fútbol de Crespo",
    description:
      "Academia sin ánimo de lucro con sedes en Crespo y Alameda La Victoria. Participan en torneos nacionales y ligas locales.",
    fullDescription:
      "La Academia de Fútbol de Crespo es una escuela sin ánimo de lucro dedicada a la formación integral de niños y adolescentes en Cartagena. Su misión es inculcar valores sociales, éticos y morales a través de la práctica del fútbol, promoviendo el desarrollo personal y deportivo de sus estudiantes. Con sedes en Crespo y Alameda La Victoria, la academia ofrece programas para diversas categorías, incluyendo sub-13, sub-15 y sub-17. Ha participado en torneos nacionales y en la Liga de Fútbol de Bolívar, obteniendo títulos y reconocimientos por su desempeño. La Academia de Fútbol de Crespo se destaca por su compromiso con la formación de futbolistas íntegros, brindando oportunidades para que los jóvenes alcancen su máximo potencial tanto en el deporte como en la vida.",
    image:
      "https://images.pexels.com/photos/292004/pexels-photo-292004.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const Equipos = () => {
  const [selected, setSelected] = useState<null | (typeof footballSchools)[0]>(
    null
  );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {footballSchools.map((school) => (
          <div
            key={school.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelected(school)}
          >
            <img
              src={school.image}
              alt={school.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {school.name}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-2">
                {school.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Ventana emergente */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white min-w-4xl rounded-2xl shadow-2xl max-w-md w-full p-15 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl"
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
            >
              ×
            </button>
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              {selected.name}
            </h2>
            <p className="text-gray-700">{selected.fullDescription}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Equipos;
