import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./composants/Accueil";
import Header from "./composants/header";
import Login from "./composants/login";
import Homme from "./composants/homme";
import Femme from "./composants/femme";
import Fille from "./composants/fille";
import Garcon from "./composants/garcon";
import Footer from "./composants/footer";
import AddPanier from "./composants/panier";
import './App.css'

function App() {
  return (
    <ChicProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/connecter" element={<Login/>} />
          <Route path="/homme" element={<Homme/>} />
          <Route path="/femme" element={<Femme/>} />
          <Route path="/fille" element={<Fille/>} />
          <Route path="/garcon" element={<Garcon />} />
          <Route path="/panier" element={<AddPanier />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChicProvider>
  );
}

export default App;