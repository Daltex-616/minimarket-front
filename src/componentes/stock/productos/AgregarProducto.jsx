import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { apiPost, apiGet } from "../../../utils/api.js";

const AgregarProducto = (parametros) => {
  const agregarProducto = async (
    nombre,
    codigo_barra,
    precio_compra,
    precio_venta
  ) => {
    const inputNombre = document.getElementById("nombre");
    const inputCodigoBarra = document.getElementById("codigo_barra");
    const labelNombre = document.getElementById("alerta_nombre");
    const labelCodigoBarra = document.getElementById("alerta_codigo_barra");
    if (nombre === "") {
      inputNombre.classList.add("border-danger");
      labelNombre.innerText = "Ingrese el nombre del producto";
      return;
    }
    inputNombre.classList.remove("border-danger");
    labelNombre.innerText = "";
    if (codigo_barra === "") {
      inputCodigoBarra.classList.add("border-danger");
      labelCodigoBarra.innerText = "Ingrese el codigo de barra";
      return;
    }
    inputCodigoBarra.classList.remove("border-danger");
    labelCodigoBarra.innerText = "";
    let data = {
      nombre,
      codigo_barra,
      precio_venta: +precio_venta,
      precio_compra: +precio_compra,
    };
    try {
      await apiPost("productos", data);
      const resultados = await apiGet("productos", parametros.credencial.token);
      parametros.setProductos(resultados.data);
      parametros.setShowModalAgregar(false);
    } catch (error) {
      labelCodigoBarra.innerText =
        error.response.data === "Codigo de barra existente"
          ? error.response.data
          : "Error";
      inputCodigoBarra.classList.add("border-danger");
    }
  };
  return (
    <Modal
      show={parametros.showModalAgregar}
      onHide={parametros.cerrarModalAgregar}
    >
      <Modal.Header closeButton>
        <Modal.Title>Agregar producto !</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" id="nombre" />
            <Form.Label className="text-danger" id="alerta_nombre"></Form.Label>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Codigo de barra</Form.Label>
            <Form.Control type="text" id="codigo_barra" />
            <Form.Label
              className="text-danger"
              id="alerta_codigo_barra"
            ></Form.Label>
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
        <Button variant="secondary" onClick={parametros.cerrarModalAgregar}>
          Cancelar
        </Button>
        <Button
          variant="success"
          onClick={() =>
            agregarProducto(
              document.getElementById("nombre").value,
              document.getElementById("codigo_barra").value,
              document.getElementById("precio_compra").value.replace(",", "."),
              document.getElementById("precio_venta").value.replace(",", ".")
            )
          }
        >
          Agregar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { AgregarProducto };
