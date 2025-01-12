import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Garcon() {  // Retirez la prop garcon ici
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="cards">
      <h1 className="titr">Nos Produits - Garçon</h1>
      <div className="card">
        {state.garcons.map((item, index) => (  // Utilisez state.garcons au lieu de garcon
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
            <button className="btn" onClick={() =>dispatch({type:'ajouter' , payload : item})}>

              Ajouter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}