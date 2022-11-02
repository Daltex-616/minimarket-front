import { TablaProductos } from "./tabla/TablaProductos";

const Stock = (parametros) => {

  if (parametros.stock === false) {
    return <></>;
  }
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
              <button type="button" className="btn btn-success m-4">
                <i className="bi bi-plus"></i>
              </button>
            </div>
          </div>
        </div>

        <TablaProductos credencial={parametros.credencial}/>
      </div>
    </>
  );
};

export { Stock };
