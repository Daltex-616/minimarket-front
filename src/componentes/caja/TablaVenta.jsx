const TablaVenta = (parametros) => {
  let total = 0
 
  const calcularVuelto = () =>{
    const pago = document.getElementById("pago").value
    const total = document.getElementById("total").innerText
    console.log(total)
    console.log(pago)
    document.getElementById("vuelto").innerText = +pago - +total
  }
  return (
    <div className="container bg-light">
      <div className="row align-items-center">
      <div className="col-9">

      <table className="table bg-light table-hover">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio Venta</th>
            <th scope="col">Acciones</th>
          </tr>
          
        </thead>
        <tbody>
          {parametros.productos.map((producto) => {
            total += producto.precio_venta
            return (
              <tr key={Date.now() + Math.floor(Math.random() * 999)}>
                <td>{producto.nombre}</td>
                <td>${producto.precio_venta}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      <div className="col-3">
        Total $ <p id="total">{total}</p>
        <br />
        <input type="number" id="pago" onChange={() => calcularVuelto()}  />
        <br />
        Vuelto $ <p id="vuelto">0</p>
      </div>

      </div>
    </div>
  );
};

export { TablaVenta };
