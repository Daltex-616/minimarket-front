import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { apiGet, apiPost } from "../../../utils/api.js";

const IngresarProducto = (parametros) => {
  const ingresarProducto = async (cantidad) => {
    const inputCantidad = document.getElementById("cantidad");
    const labelCantidad = document.getElementById("alerta_cantidad");
    if (cantidad === "" || cantidad === "0") {
      inputCantidad.classList.add("border-danger");
      labelCantidad.innerText = "Ingrese la cantidad que desea ingresar";
      return;
    }
    inputCantidad.classList.remove("border-danger");
    labelCantidad.innerText = "";
    const data = {
      codigo_barra: parametros.codigoBarra,
      cantidad: +cantidad,
    };
    await apiPost("stock", data);
    const resultados = await apiGet("productos", parametros.credencial.token);
    parametros.setProductos(resultados.data);
    parametros.setNombre("");
    parametros.setCodigoBarra("");
    parametros.setPrecioVenta("");
    parametros.setPrecioCompra("");
    parametros.setShowModalIngresar(false);
  };
  return (
    <Modal
      show={parametros.showModalIngresar}
      onHide={parametros.cerrarModalIngresar}
    >
      <Modal.Header closeButton>
        <Modal.Title>Ingreso de producto !</Modal.Title>
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
            <Form.Label>Cantidad a ingresar al deposito</Form.Label>
            <Form.Control type="number" id="cantidad" />
            <Form.Label
              className="text-danger"
              id="alerta_cantidad"
            ></Form.Label>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={parametros.cerrarModalIngresar}>
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
  );
};

export { IngresarProducto };
