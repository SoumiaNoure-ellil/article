import { Link } from "react-router-dom";
import "../App.css";
import { Home, LogIn, Phone, Search, ShoppingCart } from "lucide-react";
export default function Header() {
  return (
    <>
      <header className=" header grid grid-cols-3 space-x-16 w-full back ">
        
        <div className=" flex space-x-1 ">
          <img
            src="./src/composants/image/1 (1).png"
            className="w-36 h-full logo"
          />
          <h1 className="text-7xl  m-9  uppercase titre ">Chic&Click</h1>
        </div>
        <div className="relative flex items-center w-full max-w-lg">
          <input
            className="w-full p-2 input m-10 rounded-md pr-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-transparent"
            type="text"
            placeholder="Rechercher"
          />
          <button
            className="absolute right-12 p-2 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </div>

        <nav className="flex justify-end items-center  gap-4 p-10  ">
          <Link
            to="/"
            className="p-2 hover:text-orange-300 transition-colors duration-200 relative group"
          >
            <Home size={50} />
            <span className="hidden group-hover:block absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
              Accueil
            </span>
          </Link>
          <Link
            to="/connecter"
            className="p-2 hover:text-orange-300 transition-colors duration-200 relative group"
          >
            <LogIn size={50} />

            <span className="hidden group-hover:block absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
              connecter
            </span>
          </Link>
          <Link
            to="#"
            className="p-2 hover:text-orange-300 transition-colors duration-200 relative group"
          >
            <Phone size={50} />
            <span className="hidden group-hover:block absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
              contact
            </span>
          </Link>
          <Link
            to={"/panier"}
            className="p-2 hover:text-orange-300 transition-colors duration-200 relative group"
          >
            <ShoppingCart size={50} />
            <span className="hidden group-hover:block absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
              panier
            </span>
          </Link>
        </nav>
      </header>
      {/* section de menu  */}
      <section className="menu">
      <div className="CardHeader">
          <Link to="/garcon">
            <img
              className="cardImg"
              src="./src/composants/image/g.png"
              alt="logo"
            />
            <h3>garcon</h3>
          </Link>
        </div>
        <div className="CardHeader">
          <Link to="/homme">
            <img
              className="cardImg"
              src="./src/composants/image/homme.png"
              alt="logo"
            />

            <h3>homme</h3>
          </Link>
        </div>

        
        <div className="CardHeader">
          <Link to="/fille">
            <img
              className="cardImg"
              src="./src/composants/image/fille.png"
              alt="logo"
            />
            <h3>fille</h3>
          </Link>
        </div>
        <div className="CardHeader">
          <Link to="/femme">
            <img
              className="cardImg"
              src="./src/composants/image/femme.png"
              alt="logo"
            />
            <h3>femme</h3>
          </Link>
        </div>
        
      </section>
    </>
  );
}
