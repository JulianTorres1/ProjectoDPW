import React from "react";

export default function Calendario() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Calendario</h1>
      <p className="text-lg text-gray-700">
        Aquí puedes ver el calendario de los partidos.
      </p>
      {/* Aquí puedes agregar un componente de calendario o una tabla con los partidos */}
    </div>
  );
}