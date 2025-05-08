import React from 'react';

const MainNews = ({ titulo, resumen, enlace, imagen}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
      <img 
        src={imagen} 
        alt="Imagen noticia" 
        className="h-60 w-auto mx-auto object-center rounded-lg shadow-md mt-5" 
      />
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">{titulo}</h2>
        <p className="text-gray-700 text-lg mb-6">{resumen}</p>
        <a
          href={enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Leer más
        </a>
      </div>
    </div>
  );
};

export default MainNews;