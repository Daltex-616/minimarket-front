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
      if (result.data !== "Producto inexistente") {
        const productos2 = [...productos, result.data];

        setProductos(productos2);
        console.log(productos2);
        document.getElementById("Agregar").value = "";
      }
    }
  };
  return (
    <>
      <br />

      <div className="container bg-light">
        <div className="row aling-items-center">
          <div className="col-sm-8 ">
            <div className="input-group input-group-lg mt-3">
              <input
                id="Agregar"
                onChange={(event) => ingresarProducto(event)}
                type="text"
                className="form-control"
                placeholder="Ingrese el codigo de barra"
              ></input>
            </div>
          </div>
        </div>
      </div>

      <TablaVenta productos={productos} setProductos={setProductos} />
    </>
  );
};

export { Caja };
