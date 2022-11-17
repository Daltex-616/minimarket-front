import { TablaProductos } from "./tabla/TablaProductos";
import { AgregarProducto } from "./productos/AgregarProducto";
import { useState } from "react";
import React from "react";
import { apiGet } from "../../utils/api.js";

const Stock = (parametros) => {
  const [productos, setProductos] = useState([]);
  const [showModalAgregar, setShowModalAgregar] = useState(false);
  const [filtro, setFiltro] = useState("");

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

  const productosFiltrados = productos.filter((producto) => {
    return (
      producto.codigo_barra.includes(filtro) ||
      producto.nombre.toLowerCase().includes(filtro.toLowerCase())
    );
  });

  const nuevo = (event) => {
    setFiltro(event.target.value.trim());
  };

  const cerrarModalAgregar = () => setShowModalAgregar(false);
  const mostrarModalAgregar = () => {
    setShowModalAgregar(true);
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
          nuevo={nuevo}
          filtro={filtro}
          productos={productosFiltrados}
          setProductos={setProductos}
          credencial={parametros.credencial}
        />

        <AgregarProducto
          credencial={parametros.credencial}
          setProductos={setProductos}
          setShowModalAgregar={setShowModalAgregar}
          cerrarModalAgregar={cerrarModalAgregar}
          showModalAgregar={showModalAgregar}
        />
      </div>
    </>
  );
};

export { Stock };
