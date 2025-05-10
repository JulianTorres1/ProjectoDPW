import React from "react";

export default function Resultados({ resultados }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Resultados</h1>
      <p className="text-lg text-gray-700">
        Aquí puedes ver los resultados de los partidos.
      </p>
      <ul className="mt-4">
        {resultados.map((resultado, index) => (
          <li key={index} className="mb-2">
            <h2 className="text-xl font-semibold">{resultado.equipo1} vs {resultado.equipo2}</h2>
            <p className="text-gray-600">{resultado.golesEquipo1} - {resultado.golesEquipo2}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}