import { TablaProductos } from "./tabla/TablaProductos";
import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { apiGet, apiPost } from "../../utils/api.js";

const Stock = (parametros) => {
  const [productos, setProductos] = useState([]);
  const [showModalAgregar, setShowModalAgregar] = useState(false);

  React.useEffect(() => {
    const productos = async () => {
      const resultados = await apiGet("productos", parametros.credencial.token);
      setProductos(resultados.data);
    };
    productos();
  }, [parametros.credencial.token]);

  if (!parametros.stock) {
    return <></>;
  }

  const cerrarModalAgregar = () => setShowModalAgregar(false);
  const mostrarModalAgregar = () => {
    setShowModalAgregar(true);
  };
  const agregarProducto = async (
    nombre,
    codigo_barra,
    precio_compra,
    precio_venta
  ) => {
    if (nombre === "" || codigo_barra === "") {
      return;
    }
    let data = {
      nombre,
      codigo_barra,
      precio_venta: +precio_venta,
      precio_compra: +precio_compra,
    };
    console.log(data);
    await apiPost("productos", data);
    data = {
      nombre,
      codigo_barra,
      precio_venta: +precio_venta,
      precio_compra: +precio_compra,
      total: 0,
      salon: 0,
      deposito: 0,
    };
    const productos2 = productos;
    productos2.push(data);
    setProductos(productos2);
    setShowModalAgregar(false);
  };
  return (
    <>
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col align-self-start">
              <h1 className="m-4 text-light">Stock</h1>
            </div>
            <div className="col align-self-center"></div>
            <div className="col align-self-end text-end">
              <button
                onClick={() => mostrarModalAgregar()}
                type="button"
                className="btn btn-success m-4"
                title="Agregar"
              >
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
          </div>
        </div>

        <TablaProductos
          productos={productos}
          setProductos={setProductos}
          credencial={parametros.credencial}
        />

        <Modal show={showModalAgregar} onHide={cerrarModalAgregar}>
          <Modal.Header closeButton>
            <Modal.Title>Agregar producto !</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" id="nombre" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Codigo de barra</Form.Label>
                <Form.Control type="text" id="codigo_barra" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Precio de compra</Form.Label>
                <Form.Control type="number" id="precio_compra" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Precio de venta</Form.Label>
                <Form.Control type="number" id="precio_venta" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cerrarModalAgregar}>
              Cancelar
            </Button>
            <Button
              variant="success"
              onClick={() =>
                agregarProducto(
                  document.getElementById("nombre").value,
                  document.getElementById("codigo_barra").value,
                  document
                    .getElementById("precio_compra")
                    .value.replace(",", "."),
                  document
                    .getElementById("precio_venta")
                    .value.replace(",", ".")
                )
              }
            >
              Agregar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export { Stock };
