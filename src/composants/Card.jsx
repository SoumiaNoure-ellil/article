import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Card({ data }) {
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedIndex(index);
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
            <p>Prix : {item.prix.toFixed(2)} €</p>
            <p>
              Tailles : {item.taille?.length ? item.taille.join(", ") : "Non spécifiées"}
            </p>
            <p>
              Couleurs : {item.couleur?.length ? item.couleur.join(", ") : "Non spécifiées"}
            </p>
            <button
              className="btn"
              onClick={() => dispatch({ type: 'AJOUTER', payload: item })}
              aria-label={`Ajouter ${item.nom} au panier`}
            >
              Ajouter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
