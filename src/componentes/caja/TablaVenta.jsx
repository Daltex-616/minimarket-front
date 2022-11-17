import { apiPost } from "../../utils/api.js";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const TablaVenta = (parametros) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showw, setShoww] = useState(false);

  const handleClosee = () => setShoww(false);
  const handleShoww = () => setShoww(true);

  let total = 0;
  let vuelto =
    parametros.productos.length === 0
      ? document.getElementById("pago")
        ? +document.getElementById("pago").value - +total
        : 0
      : 0;
  const calcularVuelto = () => {
    const pago = document.getElementById("pago").value;
    const total = document.getElementById("total").innerText;
    vuelto = +pago - +total;
    if (vuelto < 0) {
      document.getElementById("vuelto").innerText = +pago - +total;
      document.getElementById("vuelto").style.color = "RED";
    } else {
      document.getElementById("vuelto").innerText = +pago - +total;
      document.getElementById("vuelto").style.color = "GREEN";
    }
  };

  const eliminarProducto = async (index) => {
    let productos2 = [...parametros.productos];
    productos2 = productos2.filter((producto, i) =>
      i !== index ? producto : null
    );
    parametros.setProductos(productos2);
  };

  const cancelarVenta = () => {
    parametros.setProductos([]);
    document.getElementById("pago").value = "";
    setShoww(false);
  };
  const procesarVenta = async () => {
    await apiPost("venta", parametros.productos);
    parametros.setProductos([]);
    document.getElementById("pago").value = "";
    setShow(false);
  };

  return (
    <div className="container bg-light position-realtive">
      <div className="row">
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
              {parametros.productos.map((producto, i) => {
                total = total + producto.precio_venta;
                vuelto = +document.getElementById("pago").value - +total;
                return (
                  <tr key={Date.now() + Math.floor(Math.random() * 9999)}>
                    <td>{producto.nombre}</td>
                    <td>${producto.precio_venta}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => eliminarProducto(i)}
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
        </div>
        <div className="col-3 border border-left-0 border-top-0 bg-light ">
          <div className="row ">
            <div className="col">
              <h1>Total $</h1>
            </div>
            <div className="col">
              <h1 id="total">{total.toFixed(2)}</h1>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              className="form-control"
              min={0}
              placeholder="¿Con cuanto abona?"
              type="number"
              id="pago"
              onChange={() => calcularVuelto()}
            />
          </div>

          <div className="row">
            <div className="col">
              <h4> Vuelto $ </h4>
            </div>
            <div className="col">
              <h4 id="vuelto">{vuelto.toFixed(2)}</h4>
            </div>
          </div>
          <Button variant="success m-2" onClick={() => handleShow()}>
            Procesar Venta
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>¿Desea procesar la operacion?</Modal.Title>
            </Modal.Header>
            <Modal.Body className="font-weight-bold">
             <h5> El valor total es de ${total}</h5>
             <h5> Y el cambio a dar es ${vuelto}</h5>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => handleClose()}>
                Cancelar
              </Button>
              <Button variant="success" onClick={() => procesarVenta()}>
                Proceder
              </Button>
            </Modal.Footer>
          </Modal>
          <Button variant="danger" onClick={() => handleShoww()}>
            Cancelar
          </Button>
          <Modal show={showw} onHide={handleClosee}>
            <Modal.Header closeButton>
              <Modal.Title>¿Desea cancelar toda la operacion?</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-danger text-light font-weight-bold">
             <h5> Advertencia:</h5>
             <h5>Se eliminaran todos los productos de la lista !</h5>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => handleClosee()}>
                Cancelar
              </Button>
              <Button variant="success" onClick={() => cancelarVenta()}>
                Proceder
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export { TablaVenta };
