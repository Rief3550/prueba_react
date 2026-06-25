import React from "react";

interface ListaProyectosProps {
  items: {
    id: number;
    nombre: string;
    completado: boolean;
  }[];
  onAlternar: (id: number) => void;
  onEliminar: (id: number) => void;
}

export default function ListaProyectos({
  items,
  onAlternar,
  onEliminar,
}: ListaProyectosProps) {
  return (
    <div>
      <h2>Mis Proyectos Activos (Modularizado)</h2>
      <ul>
        {items.map((proy) => (
          <li key={proy.id} style={{ margin: "10px 0" }}>
            <strong>{proy.nombre}</strong> -{" "}
            {proy.completado ? "FINALIZADO" : "EN DESARROLLO"}
            {/* Callbacks para enviar datos hacia arriba al padre */}
            <button
              onClick={() => onAlternar(proy.id)}
              style={{ marginLeft: "10px", backgroundColor: "#3b82f6" }}
            >
              Cambiar Estado
            </button>
            <button
              onClick={() => onEliminar(proy.id)}
              style={{ marginLeft: "5px", backgroundColor: "#ef4444" }}
            >
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
