import { useSelector } from "react-redux";
import Card from "./Card";
import { useState, useEffect } from "react";

export default function Accueil() {
  const data = useSelector((state) => state.produits);
  const [count, setCount] = useState(0);
  const maxCount = 1100;
  const delay = 100;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= maxCount) {
          clearInterval(intervalId);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, delay);
    return () => clearInterval(intervalId);
  }, []);

  // Validation des données du store
  // const { femmes = [], hommes = [], filles = [], garcons = [] } = data;

  return (
    <div className="accueil">
      <div className="about">
      <div class="image-grid">
          <img
            src="./src/composants/image/young-handsome-man-choosing-shoes-shop_1303-19731.jpg"
            alt="Collection Chik&Click"
          />
          <img
            src="./src/composants/image/young-boy-outdoor_23-2148551200.jpg"
            style={{ width: "200px", height: "200px", marginTop: "40%" }}
            alt="Style Chik&Click"
          />
          <img
            src="./src/composants/image/f.avif"
            alt="Mode Chik&Click"
            style={{ width: "200px", height: "200px", marginLeft: "20%" }}
          />
          <img
            src="./src/composants/image/beautiful-mature-woman-posing-with-fashion-clothes.jpg"
            alt="Tendances Chik&Click"
          />
        </div>

        <div className="about-content">
          <div className="text-content">
            <div className="about-header">
              <h2>
                À propos de <span>Chik&Click</span>
              </h2>
            </div>
            <p>
              Bienvenue chez Chik&Click, la destination ultime pour des
              vêtements modernes, élégants et accessibles pour hommes et femmes.
              Nous croyons que la mode doit être une expression de soi, un moyen
              d'afficher votre personnalité et votre style unique.
            </p>
            <p>
              Depuis notre lancement, nous nous efforçons de proposer des
              vêtements de qualité, qui combinent confort, tendance et
              durabilité. Que vous soyez à la recherche de tenues décontractées
              pour le quotidien ou d'options plus habillées pour des occasions
              spéciales, notre collection offre une grande variété de styles qui
              conviennent à tous les goûts.
            </p>
            <p>
              Notre équipe est passionnée par la mode et travaille sans relâche
              pour s'assurer que chaque pièce de notre collection reflète les
              dernières tendances tout en restant intemporelle. Nous
              sélectionnons soigneusement chaque article en fonction de sa
              coupe, de ses tissus et de sa durabilité, afin de vous offrir le
              meilleur rapport qualité-prix.
            </p>

            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">{count}+</div>
                <div className="stat-label">ARTICLES</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">MARQUES</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="produits">
        <h1 className="titr">Most Popular Items</h1>
        <h1 className="sous-titr">Femmes</h1>
        <Card data={data.femmes} />
        <h1 className="sous-titr">Hommes</h1>
        <Card data={data.hommes} />
        <h1 className="sous-titr">Filles</h1>
        <Card data={data.filles} />
        <h1 className="sous-titr">Garçons</h1>
        <Card data={data.garcons} />
      </div>
    </div>
  );
}
