import './App.css';
import Login from './componentes/login/Login';
import { useState } from 'react';
import { Navbar } from "./componentes/navbar/Navbar";
import { Home } from "./componentes/home/Home";
import { Caja } from "./componentes/caja/Caja";
import { Stock } from "./componentes/stock/Stock";
import { Bloqueado } from "./componentes/bloqueado/Bloqueado";

function App() {
  const [credencial, setCredencial] = useState(null);
  const [home, setHome] = useState(true);
  const [caja, setCaja] = useState(false);
  const [stock, setStock] = useState(false);
  const [bloqueado, setBloqueado] = useState(false);

  if (credencial) {
    return (
      <>
        <Navbar credencial={credencial} setCredencial={setCredencial} home={home} setHome={setHome} setCaja={setCaja} setStock={setStock} stock={stock} caja={caja} setBloqueado={setBloqueado} bloqueado={bloqueado}/>
        <Home home={home}/>
        <Caja caja={caja}/>
        <Stock stock={stock}/>
        <Bloqueado bloqueado={bloqueado}/>
      </>
    );
  }
  return (
      <Login credencial={credencial} setCredencial={setCredencial}/>
  );
}


export default App;
