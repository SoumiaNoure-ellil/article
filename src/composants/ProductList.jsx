import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ProductList({ category }) {
  const products = useSelector((state) => state.produits[category]);
  const dispatch = useDispatch();

  return (
    <div className="cards">
      <h1 className="titr">Nos Produits  - {category}</h1>
      <div className="card">
        {products?.map((item) => (
          <div key={item.id} className="pro">
            <img src={item.image_url} alt={item.nom} className="image-card" />
            <h3>{item.nom}</h3>
            <p>Prix : {item.prix} €</p>
            <p>
              Tailles :{" "}
              {item.taille?.map((ele, index) => (
                <button key={index}>{ele}</button>
              ))}
            </p>
            <p>
              Couleurs :{" "}
              {item.couleur?.map((ele, index) => (
                <button key={index}>{ele}</button>
              ))}
            </p>
            <button
              className="btn"
              onClick={() => dispatch({ type: "AJOUTER", payload: item })}
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
