import { Routes, Route } from 'react-router-dom'
import Layout from "../components/Layout";
import Home from "../pages/Home";
import APropos from "../pages/APropos";
import Projets from "../pages/Projets";
import CV from "../pages/CV";
import Contact from "../pages/Contact";
import Auteur from "../pages/Auteur";
import "./App.scss";


function App() {

  return (

    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/auteur" element={<Auteur />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
