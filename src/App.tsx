import "./App.css";
import { useState, useEffect } from "react";
import ListaProyectos from "./ListaProyectos";

interface Proyecto {
  id: number;
  nombre: string;
  completado: boolean;
}

function App() {
  //const [count, setCount] = useState(0)
  const [salud, setSalud] = useState<number>(80);
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);

  useEffect(() => {
    const listaInicial: Proyecto[] = [
      { id: 1, nombre: "Plataforma hornero", completado: false },
      { id: 2, nombre: "Sistema geolamp", completado: true },
    ];

    //usamos el set timeout para simular la demora
    const timer = setTimeout(() => {
      setProyectos(listaInicial);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const eliminarProyecto = (id: number) => {
    const listafiltrada = proyectos.filter((proy) => proy.id !== id);
    setProyectos(listafiltrada);
  };

  const alternarCompletado = (id: number) => {
    const listaModificada = proyectos.map((proy) => {
      if (proy.id === id) {
        return { ...proy, completado: !proy.completado };
      }
      return proy;
    });
    setProyectos(listaModificada);
  };

  return (
    <>
      {/* Aca vamos a escribir todo el contenido visual */}

      <h1 className="Titulo dinamico">¡Hola Federico!</h1>
      <p>Este es mi primer dashvoard con clean Architecture</p>

      {/* 1. Nuestro conocido operador Ternario expresivo */}
      {salud <= 30 ? (
        <h3 style={{ color: "#ff4a4a" }}> ALERTA CRITICA</h3>
      ) : (
        <h3 style={{ color: "#4ade80" }}> Estado optimo: {salud}%</h3>
      )}
      {/* 2. boton con una arrow functions para modificar el estado */}

      <button onClick={() => setSalud(20)}>Simular daño</button>
      <hr />

      {/* Invocación al Hijo */}
      <ListaProyectos
        items={proyectos}
        onAlternar={alternarCompletado}
        onEliminar={eliminarProyecto}
      />
    </>
  );
}

export default App;
