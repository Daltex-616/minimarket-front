
const Caja = (parametros) => {
  if(parametros.caja === false){
    return (
      <>

      </>
    );
  }
  return (
    <>
      <div className="row bg-light">
        <div className="col-sm-8">
        <form>
            <div className="form-group">
              <input type="text" className="form-control" id="inputdefault" placeholder="Introducir Codigo de Barras" />
            </div>
          </form>
          <table className="table">
            <thead>
              <tr>
                <th>Codigo de Barras</th>
                <th> Nombre </th>
                <th> Precio </th>
                <th> Cantidad </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7790580660000</td>
                <td>PRESTO PONTA POLENTA INSTANTÁNEA</td>
                <td>$100</td>
                <div className="row">
                  <input id="inputsm" type="number" min="1" className="col form-control input-sm" placeholder="Min 1" />
                  <button className="col">+</button>
                  <button className="col">-</button>
                </div>
              </tr>
            </tbody>

          </table>
        </div>
        <div className="col-sm-1">
          <div className="col-sm-1">
            <h1> Total </h1>
            <h1>$3444.55</h1>
            <div>
              <input type="number" placeholder="Ingresar Monto de Pago" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Caja };
