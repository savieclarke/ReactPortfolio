import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Menu from "./components/menu/menu";

import "./app.scss"
import { useState } from "react";



function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Header/>
     <Menu/>
     <div className="sections">
        <Intro/>nn
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>       
       <Footer/>
bb
    </div>
  );
}

export default App;
