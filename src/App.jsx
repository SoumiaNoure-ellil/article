
import Accueil from "./composants/Accueil";
import Header from "./composants/header";
import Login from "./composants/login";
import Footer from "./composants/footer";
import AddPanier from "./composants/panier";
import ProductList from "./composants/ProductList";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/connecter" element={<Login />} />
        <Route path="/homme" element={<ProductList category="hommes" />} />
        <Route path="/femme" element={<ProductList category="femmes" />} />
        <Route path="/fille" element={<ProductList category="filles" />} />
        <Route path="/garcon" element={<ProductList category="garcons" />} />
        <Route path="/panier" element={<AddPanier />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
