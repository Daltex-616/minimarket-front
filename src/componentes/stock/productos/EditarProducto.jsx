import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { apiGet, apiPut } from "../../../utils/api.js";

const EditarProducto = (parametros) => {
  const guardarProducto = async (
    nombre,
    codigoBarra,
    precioCompra,
    precioVenta
  ) => {
    const inputNombre = document.getElementById("nombre");
    const labelNombre = document.getElementById("alerta_nombre");
    if (nombre === "") {
      inputNombre.classList.add("border-danger");
      labelNombre.innerText = "Ingrese el nombre del producto";
      return;
    }
    inputNombre.classList.remove("border-danger");
    labelNombre.innerText = "";
    const data = {
      nombre: nombre,
      codigo_barra: codigoBarra,
      precio_compra: precioCompra,
      precio_venta: precioVenta,
    };
    await apiPut("productos", data);
    const resultados = await apiGet("productos", parametros.credencial.token);
    parametros.setProductos(resultados.data);
    parametros.setNombre("");
    parametros.setCodigoBarra("");
    parametros.setPrecioVenta("");
    parametros.setPrecioCompra("");
    parametros.setShowModalGuardar(false);
  };

  return (
    <Modal
      show={parametros.showModalGuardar}
      onHide={parametros.cerrarModalGuardar}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edicion de producto !</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              defaultValue={parametros.nombre}
              id="nombre"
            />
            <Form.Label className="text-danger" id="alerta_nombre"></Form.Label>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Codigo de barra</Form.Label>
            <Form.Control
              type="text"
              defaultValue={parametros.codigoBarra}
              id="codigo_barra"
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio de compra</Form.Label>
            <Form.Control
              type="number"
              defaultValue={parametros.precioCompra}
              id="precio_compra"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio de venta</Form.Label>
            <Form.Control
              type="number"
              defaultValue={parametros.precioVenta}
              id="precio_venta"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={parametros.cerrarModalGuardar}>
          Cancelar
        </Button>
        <Button
          variant="success"
          onClick={() =>
            guardarProducto(
              document.getElementById("nombre").value,
              document.getElementById("codigo_barra").value,
              document.getElementById("precio_compra").value.replace(",", "."),
              document.getElementById("precio_venta").value.replace(",", ".")
            )
          }
        >
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { EditarProducto };
