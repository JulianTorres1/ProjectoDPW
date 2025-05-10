import React from "react";

export default function Noticias({ noticias }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Noticias</h1>
      <p className="text-lg text-gray-700">
        Aquí puedes ver las últimas noticias del fútbol.
      </p>
      <ul className="mt-4">
        {noticias.map((noticia, index) => (
          <li key={index} className="mb-2">
            <h2 className="text-xl font-semibold">{noticia.titulo}</h2>
            <p className="text-gray-600">{noticia.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}