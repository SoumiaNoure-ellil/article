import React, { useState, useContext } from "react";
import { ChicContext } from "./appContext";

export default function Homme() {
  const { state, handleAdd } = useContext(ChicContext); 
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedIndex(index); 
  };

  return (
    <div className="cards">
      <h1 className="titr">Nos Produits - Homme</h1>
      <div className="card">
        {state.hommes.map((item, index) => (  // Changé state.map en state.hommes.map
          <div
            key={item.id}
            className={`pro ${selectedIndex === index ? "selected" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <img src={item.image_url} alt={item.nom} className="image-card" />
            <h3 className="font-bold">{item.nom}</h3>
            <p>Prix : {item.prix} €</p>
            <p>Tailles : {item.taille.join(", ")}</p>
            <p>Couleurs : {item.couleur.join(", ")}</p>
            <button className="btn" onClick={() => handleAdd(item)}>
              Ajouter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}