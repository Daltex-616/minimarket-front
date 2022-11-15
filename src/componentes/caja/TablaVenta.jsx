import { apiPost } from "../../utils/api.js";

const TablaVenta = (parametros) => {
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
    document.getElementById("vuelto").innerText = +pago - +total;
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
    document.getElementById("pago").value = 0;
  };
  const procesarVenta = async () => {
    await apiPost("venta", parametros.productos);
    parametros.setProductos([]);
    document.getElementById("pago").value = 0;
  };
  return (
    <div className="container bg-light">
      <div className="row align-items-center">
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
                  <tr key={Date.now() + Math.floor(Math.random() * 999)}>
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
        <div className="col-3">
          <div className="row">
            <div className="col">Total $</div>
            <div className="col">
              <p id="total">{total}</p>
            </div>
          </div>
          <input
            placeholder="con cuanto abona?"
            type="number"
            id="pago"
            onChange={() => calcularVuelto()}
          />

          <div className="row">
            <div className="col">Vuelto $</div>
            <div className="col">
              <p id="vuelto">{vuelto}</p>
            </div>
          </div>
          <button
            className="btn btn-success m-1"
            onClick={() => procesarVenta()}
          >
            Procesar venta
          </button>
          <button
            className="btn btn-danger m-1"
            onClick={() => cancelarVenta()}
          >
            Cancelar venta
          </button>
        </div>
      </div>
    </div>
  );
};

export { TablaVenta };
