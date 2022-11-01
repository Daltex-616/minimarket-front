
const FormAgregarProducto = (parametros) => {
  if(parametros.formAgregarProducto === false){
    return (
      <>
      </>
    );
  }
  return (
    <>
      Formulario para Agregar Producto
      <div>
  <form className="mt-3">

    <div className="from-group row bg-light" >
      <label for="colFormLabelSm" className="col-2 col-form-label col-from-label-sm">Producto</label>
      <input type="text" className="col-10" id="nombreproducto" placeholder="Nombre del Producto" required/>
    </div>

    <div className="from-group row bg-light" >
      <label className="col-2 col-form-label col-from-label-sm ">Codigo de Barras</label>
      
      <input type="text" className="col-10" id="codigobarras" placeholder="Codigo de barras" required />
      
    </div>

    <div className="from-group row bg-light" >
      <label className="col-2 col-form-label col-from-label-sm">Precio de Compra</label>
      
      <input type="number" className="col-sm-10" id="preciocompra" placeholder="$0,00" required />
      
    </div>

    <div className="from-group row bg-light" >
      <label className="col-2 col-form-label col-from-label-sm">Precio de Venta</label>
  
      <input type="number" className="col-sm-10" id="precioventa" placeholder="$0,00" required/>
      
    </div>

  </form>
</div>
    </>
  );
};

export { Stock };