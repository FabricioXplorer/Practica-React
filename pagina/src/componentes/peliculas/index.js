import React, { useState } from 'react';
import "./peliculas.css";
import Card from "../Card/index";

const Peliculas = () => {
  const [numCards, setNumCards] = useState(1); // Estado para el número de tarjetas

  const crearNuevaCard = () => {
    // Incrementa el número de tarjetas al hacer clic en el botón
    setNumCards(numCards + 1);
  };

  return (
    <section className="peliculas">
      <h3 className="titlePeliculas">Peliculas</h3>
      <div className="contenedor">
       
        {Array.from({ length: numCards }, (_, index) => (
          <Card key={index} />
        )}
        <button onClick={crearNuevaCard}>Crear Nueva Card</button>
      </div>
    </section>
  )
}

export default Peliculas;
