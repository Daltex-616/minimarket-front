import "./App.css";
import Login from "./componentes/login/Login";
import { useState, useEffect } from "react";
import { Navbar } from "./componentes/navbar/Navbar";
import { Home } from "./componentes/home/Home";
import { Caja } from "./componentes/caja/Caja";
import { Stock } from "./componentes/stock/Stock";
import { Bloqueado } from "./componentes/bloqueado/Bloqueado";
import { apiGet } from "./utils/api.js";
import {Signup} from "./componentes/signup/Signup"


function App() {
  const [credencial, setCredencial] = useState(null);
  const [home, setHome] = useState(true);
  const [caja, setCaja] = useState(false);
  const [stock, setStock] = useState(false);
  const [bloqueado, setBloqueado] = useState(false);
  const [formAgregarProducto, setFormAgregarProducto] = useState(false);
  const [signup, setSignup] = useState(false)
 

  useEffect(() => {
    const logeado = async () => {
      const userdata = JSON.parse(localStorage.getItem("credenciales"));

      const perfil =
        userdata && userdata.token
          ? await apiGet("auth/perfil", userdata.token)
          : null;

      if (perfil) {
        setCredencial(userdata);
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
          signup={signup}
          setSignup={setSignup}
         
         
          
        />
        
        {!stock && !caja && !signup ? <Home home={home} /> : null}
        {!stock && !home && !signup ? <Caja caja={caja} /> : null}
        {!home && !caja && !signup ? <Stock
          stock={stock}
          setStock={setStock}
          credencial={credencial}
          formAgregarProducto={formAgregarProducto}
          setFormAgregarProducto={setFormAgregarProducto}
        /> : null}
        {!stock && !caja && !home ? <Signup 
        signup={signup}
        setSignup={setSignup}
        credencial={credencial}/> : null}
        
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
