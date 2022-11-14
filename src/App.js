import "./App.css";
import Login from "./componentes/login/Login";
import { useState, useEffect } from "react";
import { Navbar } from "./componentes/navbar/Navbar";
import { Home } from "./componentes/home/Home";
import { Caja } from "./componentes/caja/Caja";
import { Stock } from "./componentes/stock/Stock";
import { Bloqueado } from "./componentes/bloqueado/Bloqueado";
import { apiGet } from "./utils/api.js";


function App() {
  const [credencial, setCredencial] = useState(null);
  const [home, setHome] = useState(true);
  const [caja, setCaja] = useState(false);
  const [stock, setStock] = useState(false);
  const [bloqueado, setBloqueado] = useState(false);
  const [formAgregarProducto, setFormAgregarProducto] = useState(false);
 

  useEffect(() => {
    const logeado = async () => {
      const resultado = localStorage.getItem("token")
        ? await apiGet("auth/perfil", localStorage.getItem("token"))
        : null;

      if (resultado) {
        setCredencial(JSON.parse(localStorage.getItem("userdata")));
      } else {
        setCredencial(null);
        localStorage.clear();
      }
    };
    logeado();
  }, []);

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
    
        

  </>
  )
  
  
}

export default App;
