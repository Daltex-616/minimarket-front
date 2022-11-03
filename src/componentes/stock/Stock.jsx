import { TablaProductos } from "./tabla/TablaProductos";
import { FormAgregarProducto } from "./FormAgregarProducto";

const Stock = (parametros) => {
  if (!parametros.stock) {
    return <></>;
  }
  if (!parametros.stock && !parametros.formAgregarProducto) {
    return <></>;
  }
  if (parametros.formAgregarProducto) {
    return (
      <>
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col align-self-start">
                <h1 className="m-4 text-light">
                  Formulario para Agregar Producto
                </h1>
              </div>
              <div className="col align-self-center"></div>
            </div>
          </div>

          <FormAgregarProducto
            formAgregarProducto={parametros.formAgregarProducto}
            setStock={parametros.setStock}
            setFormAgregarProducto={parametros.setFormAgregarProducto}
          />
        </div>
      </>
    );
  }
  const verFormAgregarProducto = () => {
    parametros.setFormAgregarProducto(true);
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
                onClick={() => verFormAgregarProducto()}
                type="button"
                className="btn btn-success m-4"
                title="Agregar"
              >
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
          </div>
        </div>

        <TablaProductos credencial={parametros.credencial} />
      </div>
    </>
  );
};

export { Stock };
