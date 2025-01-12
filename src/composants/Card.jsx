// Card.js
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Card({ data }) {
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleCardClick = (index) => {
    setSelectedIndex(index);
  };

  const handleAddToCart = (item, e) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_TO_PANIER', payload: item });
  };

  return (
    <div className="products-slider">
      <div className="product-cards">
        {data?.map((item, index) => (
          <div
            key={item.id}
            className={`product-card ${selectedIndex === index ? "selected" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <img
              src={item.image_url}
              alt={item.nom}
              className="product-image"
            />
            <h3>{item.nom}</h3>
            <p>Prix : {item.prix} €</p>
            <p>Tailles : {item.taille.join(", ")}</p>
            <p>Couleurs : {item.couleur.join(", ")}</p>
            <button 
              className="btn" 
              onClick={(e) => handleAddToCart(item, e)}
            >
              Ajouter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}