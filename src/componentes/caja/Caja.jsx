import { apiPost } from "../../utils/api.js";
import { useState } from "react";
import { TablaVenta } from "./TablaVenta.jsx";

const Caja = (parametros) => {
  const [productos, setProductos] = useState([]);

  if (parametros.caja === false) {
    return <></>;
  }
  const ingresarProducto = async (event) => {
    const input = event.target.value;

    const data = {
      codigo_barra: input,
    };
    if (input !== "") {
      const result = await apiPost("productos/buscar", data);

      const productos2 = [...productos, result.data];
      setProductos(productos2);

      document.getElementById("Agregar").value = "";
    }
  };
  return (
    <>
      <br />

      <div className="container bg-light">
        <div className="row aling-items-center">
          <div className="col-sm-8 ">
            <input
              id="Agregar"
              onChange={(event) => ingresarProducto(event)}
              type="text"
              className="form-control"
              placeholder=" Codigo de Barras "
              aria-label=" Codigo de Barras "
            />
          </div>
          <div className="col-sm-4">
            <h1>Total</h1>
          </div>
        </div>
      </div>

      <TablaVenta productos={productos} />
    </>
  );
};

export { Caja };
