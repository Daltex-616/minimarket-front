//import React, { useState } from "react";
//import { apiPost } from "../../../utils/api.js";
const FormAgregarProducto = (parametros) => {
  if (parametros.formAgregarProducto === false) {
    return <></>;
    
  }
  const cerrar = () => {
    parametros.setFormAgregarProducto(false);
    parametros.setStock(true);
  }
  const agregar =() =>{
    console.log('hola')
  }
  return (
    <>
      Formulario para Agregar Producto
      <div>
  <div >
  <form className="mt-3 form-register">

    <div className="from-group row bg-light" >
      <label htmlFor="colFormLabelSm" className="col-2 col-form-label col-from-label-sm">Producto</label>
      <input type="text" className="col-10" id="nombreproducto" placeholder="Nombre del Producto" required/>
    </div>

    <div className="from-group row bg-light" >
      <label className="col-2 col-form-label col-from-label-sm ">Codigo de Barras</label>
      
      <input type="text" className="col-10" id="codigobarras" placeholder="Codigo de barras" required />
      
    </div>

    <div className="from-group row bg-light" >
      <label className="col-2 col-form-label col-from-label-sm">Precio de Compra</label>
      
      <input type="number" min="0" className="col-sm-10" id="preciocompra" placeholder="$0,00" required />
      
    </div>

    <div className="from-group row bg-light" >
      <label className="col-2 col-form-label col-from-label-sm">Precio de Venta</label>
  
      <input type="number" min="0" className="col-sm-10" id="precioventa" placeholder="$0,00" required/>
      
    </div>

    <div className="from-group row bg-light">
       <button type="submit" onClick={() => agregar()}>Agregar</button>
    </div>

  </form>
  <div className="from-group row bg-light">
  <button  onClick={() => cerrar() } id="cerrarformagregarprod">Salir</button>
  </div>
  </div>
</div>
    </>
  );
};

export { FormAgregarProducto };
