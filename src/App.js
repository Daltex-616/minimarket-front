import './App.css';
import Login from './componentes/login/Login';
import { useState } from 'react';
import { Navbar } from "./componentes/navbar/Navbar";
import { Home } from "./componentes/home/Home";
import { Caja } from "./componentes/caja/Caja";
import { Stock } from "./componentes/stock/Stock";

function App() {
  const [credencial, setCredencial] = useState(null);
  const [home, setHome] = useState(true);
  const [caja, setCaja] = useState(false);
  const [stock, setStock] = useState(false);

  if (credencial) {
    return (
      <>
        <Navbar credencial={credencial} setCredencial={setCredencial} home={home} setHome={setHome} setCaja={setCaja} setStock={setStock} stock={stock} caja={caja}/>
        <Home home={home}/>
        <Stock stock={stock}/>
        <Caja caja={caja}/>
      </>
    );
  }
  return (
      <Login credencial={credencial} setCredencial={setCredencial}/>
  );
}


export default App;
