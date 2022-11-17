import { useState } from "react";
import React from "react";
import Filtro from "../filtro/Filtro";
import { EliminarProducto } from "../productos/EliminarProducto.jsx";
import { EditarProducto } from "../productos/EditarProducto.jsx";
import { IngresarProducto } from "../productos/IngresarProducto.jsx";
import { MoverProducto } from "../productos/MoverProducto.jsx";

export const TablaProductos = (parametros) => {
  const { nuevo, filtro } = parametros;
  const [showModalEliminar, setShowModalEliminar] = useState(false);
  const [showModalGuardar, setShowModalGuardar] = useState(false);
  const [showModalIngresar, setShowModalIngresar] = useState(false);
  const [showModalMover, setShowModalMover] = useState(false);
  const [nombre, setNombre] = useState("");
  const [codigoBarra, setCodigoBarra] = useState("");
  const [precioVenta, setPrecioVenta] = useState(0);
  const [precioCompra, setPrecioCompra] = useState(0);
  const [destino, setDestino] = useState(0);

  const cerrarModalEliminar = () => setShowModalEliminar(false);
  const cerrarModalGuardar = () => setShowModalGuardar(false);
  const cerrarModalIngresar = () => setShowModalIngresar(false);
  const cerrarModalMover = () => setShowModalMover(false);

  const mostrarModalEliminar = (nombre, codigo_barra) => {
    setShowModalEliminar(true);
    setNombre(nombre);
    setCodigoBarra(codigo_barra);
  };
  const mostrarModalGuardar = (producto) => {
    setShowModalGuardar(true);
    setNombre(producto.nombre);
    setCodigoBarra(producto.codigo_barra);
    setPrecioVenta(producto.precio_venta);
    setPrecioCompra(producto.precio_compra);
  };

  const mostrarModalIngresar = (producto) => {
    setShowModalIngresar(true);
    setNombre(producto.nombre);
    setCodigoBarra(producto.codigo_barra);
    setPrecioVenta(producto.precio_venta);
    setPrecioCompra(producto.precio_compra);
  };

  const mostrarModalMover = (producto, destino) => {
    setDestino(destino);
    setShowModalMover(true);
    setNombre(producto.nombre);
    setCodigoBarra(producto.codigo_barra);
    setPrecioVenta(producto.precio_venta);
    setPrecioCompra(producto.precio_compra);
  };

  return (
    <>
      <Filtro nuevo={nuevo} filtro={filtro} />
      <br />
      {filtro !== "" ? (
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
            {parametros.productos.map((producto) => {
              return (
                <tr
                  key={producto.codigo_barra}
                  className={
                    producto.total === 0
                      ? "table-danger"
                      : producto.total < 10
                      ? "table-warning"
                      : "table-success"
                  }
                >
                  <td>{producto.nombre}</td>
                  <td>{producto.codigo_barra}</td>
                  <td>{producto.precio_compra}</td>
                  <td>{producto.precio_venta}</td>
                  <td>{producto.salon}</td>
                  <td>{producto.deposito}</td>
                  <td>{producto.total}</td>
                  <td>
                    <button
                      onClick={() => mostrarModalMover(producto, 2)}
                      type="button"
                      className="btn btn-light m-1"
                      title="Mover al salon"
                    >
                      <i className="bi bi-box-arrow-left"></i>
                    </button>
                    <button
                      onClick={() => mostrarModalMover(producto, 1)}
                      type="button"
                      className="btn btn-light m-1"
                      title="Mover al deposito"
                    >
                      <i className="bi bi-box-arrow-right"></i>
                    </button>
                    <button
                      onClick={() => mostrarModalIngresar(producto)}
                      type="button"
                      className="btn btn-primary m-1"
                      title="Ingresar"
                    >
                      <i className="bi bi-box-arrow-down"></i>
                    </button>
                    <button
                      onClick={() => mostrarModalGuardar(producto)}
                      type="button"
                      className="btn btn-warning m-1"
                      title="Editar"
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        mostrarModalEliminar(
                          producto.nombre,
                          producto.codigo_barra
                        )
                      }
                      className="btn btn-danger m-1"
                      title="Eliminar"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
      <br />

      <MoverProducto
        credencial={parametros.credencial}
        setProductos={parametros.setProductos}
        setNombre={setNombre}
        setCodigoBarra={setCodigoBarra}
        setShowModalMover={setShowModalMover}
        showModalMover={showModalMover}
        cerrarModalMover={cerrarModalMover}
        nombre={nombre}
        precioCompra={precioCompra}
        precioVenta={precioVenta}
        codigoBarra={codigoBarra}
        setPrecioVenta={setPrecioVenta}
        setPrecioCompra={setPrecioCompra}
        destino={destino}
      />

      <IngresarProducto
        credencial={parametros.credencial}
        setProductos={parametros.setProductos}
        setNombre={setNombre}
        setCodigoBarra={setCodigoBarra}
        setShowModalIngresar={setShowModalIngresar}
        showModalIngresar={showModalIngresar}
        cerrarModalIngresar={cerrarModalIngresar}
        nombre={nombre}
        precioCompra={precioCompra}
        precioVenta={precioVenta}
        codigoBarra={codigoBarra}
        setPrecioVenta={setPrecioVenta}
        setPrecioCompra={setPrecioCompra}
      />

      <EditarProducto
        credencial={parametros.credencial}
        setProductos={parametros.setProductos}
        setNombre={setNombre}
        setCodigoBarra={setCodigoBarra}
        setShowModalGuardar={setShowModalGuardar}
        showModalGuardar={showModalGuardar}
        cerrarModalGuardar={cerrarModalGuardar}
        nombre={nombre}
        precioCompra={precioCompra}
        precioVenta={precioVenta}
        codigoBarra={codigoBarra}
        setPrecioVenta={setPrecioVenta}
        setPrecioCompra={setPrecioCompra}
      />

      <EliminarProducto
        credencial={parametros.credencial}
        setProductos={parametros.setProductos}
        setNombre={setNombre}
        setCodigoBarra={setCodigoBarra}
        setShowModalEliminar={setShowModalEliminar}
        showModalEliminar={showModalEliminar}
        cerrarModalEliminar={cerrarModalEliminar}
        nombre={nombre}
        codigoBarra={codigoBarra}
      />
    </>
  );
};
