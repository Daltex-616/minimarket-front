import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { apiGet, apiDelete } from "../../../utils/api.js";

const EliminarProducto = (parametros) => {
  const eliminarProducto = async (codigo_barra) => {
    const data = {
      codigo_barra,
    };
    await apiDelete("productos", data);
    const resultados = await apiGet("productos", parametros.credencial.token);
    parametros.setProductos(resultados.data);
    parametros.setNombre("");
    parametros.setCodigoBarra("");
    parametros.setShowModalEliminar(false);
  };

  return (
    <Modal
      show={parametros.showModalEliminar}
      onHide={parametros.cerrarModalEliminar}
    >
      <Modal.Header closeButton>
        <Modal.Title>Eliminacion de producto !</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        ¿Realmente desea eliminar el producto {parametros.nombre}?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={parametros.cerrarModalEliminar}>
          Cancelar
        </Button>
        <Button
          variant="danger"
          onClick={() => eliminarProducto(parametros.codigoBarra)}
        >
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { EliminarProducto };
