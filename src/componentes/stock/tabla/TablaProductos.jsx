import { useState } from "react";
import React from "react";
import { apiGet } from "../../../utils/api.js";

export const TablaProductos = (parametros) => {
  const [productos, setProductos] = useState([]);

  React.useEffect(() => {
    const productos = async () => {
      const resultados = await apiGet("productos", parametros.credencial.token);
      setProductos(resultados.data);
    };
    productos();
  }, [parametros.credencial.token]);

  return (
    <>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Codigo de Barra</th>
            <th scope="col">Precio Compra</th>
            <th scope="col">Precio Venta</th>
            <th scope="col">Stock Salon</th>
            <th scope="col">Stock Deposito</th>
            <th scope="col">Total</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => {
            return (

                <tr key={producto.codigo_barra} className={producto.total === 0 ? "table-danger" : producto.total < 10 ? "table-warning" : "table-success" }>
                  <td>{producto.nombre}</td>
                  <td>{producto.codigo_barra}</td>
                  <td>{producto.precio_compra}</td>
                  <td>{producto.precio_venta}</td>
                  <td>{producto.deposito}</td>
                  <td>{producto.salon}</td>
                  <td>{producto.total}</td>
                  <td>
                    <button type="button" className="btn btn-light m-1" title="Mover">
                      <i className="bi bi-arrow-left-right"></i>
                    </button>
                    <button type="button" className="btn btn-primary m-1" title="Ingresar">
                      <i className="bi bi-box-arrow-down"></i>
                    </button>
                    <button type="button" className="btn btn-warning m-1" title="Editar">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button type="button" className="btn btn-danger m-1" title="Eliminar">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>

            );
          })}
        </tbody>
      </table>
      <br />
    </>
  );
};
