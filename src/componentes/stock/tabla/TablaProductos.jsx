import { useState } from "react";
import React from "react";
import { apiDelete, apiPut, apiPost, apiGet } from "../../../utils/api.js";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Filtro from "../filtro/Filtro";

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

  const moverProducto = async (cantidad, destino) => {
    const data = {
      codigo_barra: codigoBarra,
      origen: +destino === 1 ? 2 : 1,
      destino: +destino,
      cantidad: +cantidad,
    };
    await apiPut("stock", data);
    const resultados = await apiGet("productos", parametros.credencial.token);
    parametros.setProductos(resultados.data);
    setNombre("");
    setCodigoBarra("");
    setPrecioVenta("");
    setPrecioCompra("");
    setShowModalMover(false);
  };

  const eliminarProducto = async (codigo_barra) => {
    const data = {
      codigo_barra: codigo_barra,
    };
    await apiDelete("productos", data);
    const resultados = await apiGet("productos", parametros.credencial.token);
    parametros.setProductos(resultados.data);
    setNombre("");
    setCodigoBarra("");
    setShowModalEliminar(false);
  };

  const guardarProducto = async (
    nombre,
    codigoBarra,
    precioCompra,
    precioVenta
  ) => {
    if (nombre === "") {
      return;
    }
    const data = {
      nombre: nombre,
      codigo_barra: codigoBarra,
      precio_compra: precioCompra,
      precio_venta: precioVenta,
    };
    await apiPut("productos", data);
    const resultados = await apiGet("productos", parametros.credencial.token);
    parametros.setProductos(resultados.data);
    setNombre("");
    setCodigoBarra("");
    setPrecioVenta("");
    setPrecioCompra("");
    setShowModalGuardar(false);
  };

  const ingresarProducto = async (cantidad) => {
    const data = {
      codigo_barra: codigoBarra,
      cantidad: +cantidad,
    };
    await apiPost("stock", data);
    const resultados = await apiGet("productos", parametros.credencial.token);
    parametros.setProductos(resultados.data);
    setNombre("");
    setCodigoBarra("");
    setPrecioVenta("");
    setPrecioCompra("");
    setShowModalIngresar(false);
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

      <Modal show={showModalMover} onHide={cerrarModalMover}>
        <Modal.Header closeButton>
          <Modal.Title>
            Movimiento de producto al {destino === 1 ? "deposito" : "salon"}!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" defaultValue={nombre} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Codigo de barra</Form.Label>
              <Form.Control type="text" defaultValue={codigoBarra} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cantidad a mover</Form.Label>
              <Form.Control type="number" id="cantidad" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModalMover}>
            Cancelar
          </Button>
          <Button
            variant="success"
            onClick={() =>
              moverProducto(document.getElementById("cantidad").value, destino)
            }
          >
            Mover
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModalIngresar} onHide={cerrarModalIngresar}>
        <Modal.Header closeButton>
          <Modal.Title>Ingreso de producto !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" defaultValue={nombre} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Codigo de barra</Form.Label>
              <Form.Control type="text" defaultValue={codigoBarra} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cantidad a ingresar al deposito</Form.Label>
              <Form.Control type="number" id="cantidad" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModalIngresar}>
            Cancelar
          </Button>
          <Button
            variant="success"
            onClick={() =>
              ingresarProducto(document.getElementById("cantidad").value)
            }
          >
            Ingresar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModalGuardar} onHide={cerrarModalGuardar}>
        <Modal.Header closeButton>
          <Modal.Title>Edicion de producto !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" defaultValue={nombre} id="nombre" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Codigo de barra</Form.Label>
              <Form.Control
                type="text"
                defaultValue={codigoBarra}
                id="codigo_barra"
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Precio de compra</Form.Label>
              <Form.Control
                type="number"
                defaultValue={precioCompra}
                id="precio_compra"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Precio de venta</Form.Label>
              <Form.Control
                type="number"
                defaultValue={precioVenta}
                id="precio_venta"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModalGuardar}>
            Cancelar
          </Button>
          <Button
            variant="success"
            onClick={() =>
              guardarProducto(
                document.getElementById("nombre").value,
                document.getElementById("codigo_barra").value,
                document
                  .getElementById("precio_compra")
                  .value.replace(",", "."),
                document.getElementById("precio_venta").value.replace(",", ".")
              )
            }
          >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModalEliminar} onHide={cerrarModalEliminar}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminacion de producto !</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Realmente desea eliminar el producto {nombre}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModalEliminar}>
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={() => eliminarProducto(codigoBarra)}
          >
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
