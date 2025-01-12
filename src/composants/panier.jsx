// AddPanier.js
import { useSelector, useDispatch } from "react-redux";

export default function AddPanier() {
  const panier = useSelector(state => state.panier);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch({ type: 'REMOVE_FROM_PANIER', payload: index });
  };

  return (
    <div className="panier-container">
      <h1 className="text-2xl">Votre Panier</h1>
      {panier.length === 0 ? (
        <p className="m-20">Votre panier est vide.</p>
      ) : (
        <div>
          {panier.map((item, index) => (
            <div key={index} className="panier-item">
              <img src={item.image_url} alt={item.nom} className="image-panier" />
              <h3>{item.nom}</h3>
              <p>Prix : {item.prix} €</p>
              <p>Tailles : {item.taille.join(", ")}</p>
              <p>Couleurs : {item.couleur.join(", ")}</p>
              <div>
                <button className="bntDelete" onClick={() => handleDelete(index)}>
                  Supprimer
                </button>
              </div>
            </div>
          ))}
          <div className="total">
            <h3>
              Total: {panier.reduce((total, item) => total + item.prix, 0).toFixed(2)} €
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}