import "./App.css";
import Login from "./componentes/login/Login";
import { useState } from "react";
import { Navbar } from "./componentes/navbar/Navbar";
import { Home } from "./componentes/home/Home";
import { Caja } from "./componentes/caja/Caja";
import { Stock } from "./componentes/stock/Stock";
import { Signup } from "./componentes/signup/Signup";
import { Bloqueado } from "./componentes/bloqueado/Bloqueado";


function App() {
  const [credencial, setCredencial] = useState(null);
  const [home, setHome] = useState(true);
  const [caja, setCaja] = useState(false);
  const [stock, setStock] = useState(false);
  const [bloqueado, setBloqueado] = useState(false);
  const [formAgregarProducto, setFormAgregarProducto] = useState(false);
  const [signup, setSignup] = useState(false)

  if (credencial) {
    return (
      <>
        <Navbar
          credencial={credencial}
          setCredencial={setCredencial}
          home={home}
          setHome={setHome}
          caja={caja}
          setCaja={setCaja}
          stock={stock}
          setStock={setStock}
          bloqueado={bloqueado}
          setBloqueado={setBloqueado}
          formAgregarProducto={formAgregarProducto}
          setFormAgregarProducto={setFormAgregarProducto}
          signup={signup}
          setSignup={setSignup}
         
          
        />
        <Home home={home} />
        <Caja caja={caja} />
        <Stock
          stock={stock}
          setStock={setStock}
          credencial={credencial}
          formAgregarProducto={formAgregarProducto}
          setFormAgregarProducto={setFormAgregarProducto}
        />
        <Bloqueado bloqueado={bloqueado} />
       
      </>
    );
  }
  return(
  <>
        <Login credencial={credencial} setCredencial={setCredencial} 
        
        
        
        />
        <Signup signup={signup}/>
        

  </>
  )
  
  
}

export default App;
