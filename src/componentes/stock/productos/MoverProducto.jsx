import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { apiGet, apiPut } from "../../../utils/api.js";

const MoverProducto = (parametros) => {
  const moverProducto = async (cantidad, destino) => {
    const inputCantidad = document.getElementById("cantidad");
    const labelCantidad = document.getElementById("alerta_cantidad");
    if (cantidad === "" || cantidad === "0") {
      inputCantidad.classList.add("border-danger");
      labelCantidad.innerText = "Ingrese la cantidad que desea mover";
      return;
    }
    inputCantidad.classList.remove("border-danger");
    labelCantidad.innerText = "";
    const data = {
      codigo_barra: parametros.codigoBarra,
      origen: +destino === 1 ? 2 : 1,
      destino: +destino,
      cantidad: +cantidad,
    };

    try {
      await apiPut("stock", data);
      const resultados = await apiGet("productos", parametros.credencial.token);
      parametros.setProductos(resultados.data);
      parametros.setNombre("");
      parametros.setCodigoBarra("");
      parametros.setPrecioVenta("");
      parametros.setPrecioCompra("");
      parametros.setShowModalMover(false);
    } catch (error) {
      labelCantidad.innerText =
        error.response.data === "La cantidad solicitada supera a la existente"
          ? error.response.data
          : "Error";
      inputCantidad.classList.add("border-danger");
    }
  };
  return (
    <Modal
      show={parametros.showModalMover}
      onHide={parametros.cerrarModalMover}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Movimiento de producto al{" "}
          {parametros.destino === 1 ? "deposito" : "salon"}!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              defaultValue={parametros.nombre}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Codigo de barra</Form.Label>
            <Form.Control
              type="text"
              defaultValue={parametros.codigoBarra}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cantidad a mover</Form.Label>
            <Form.Control type="number" id="cantidad" />
            <Form.Label
              className="text-danger"
              id="alerta_cantidad"
            ></Form.Label>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={parametros.cerrarModalMover}>
          Cancelar
        </Button>
        <Button
          variant="success"
          onClick={() =>
            moverProducto(
              document.getElementById("cantidad").value,
              parametros.destino
            )
          }
        >
          Mover
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { MoverProducto };
