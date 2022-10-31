

const Navbar = (parametros) => {

const inicio = async () => {
  parametros.setHome(true);
  parametros.setCaja(false);
  parametros.setStock(false);
};

const caja = async () => {
  parametros.setHome(false);
  parametros.setStock(false);
  const roles = parametros.credencial.roles;
  roles.map((rol) => rol === "2" ? parametros.setCaja(true): parametros.setHome(false));
};

const stock = async () => {
  parametros.setHome(false);
  parametros.setCaja(false);
  parametros.setStock(true);
};

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">

          <button className="btn btn-outline-success m-1" onClick={() => inicio()}>
            Inicio
          </button>
          <button className="btn btn-outline-success m-1" onClick={() => caja()}>
            Caja
          </button>
          <button className="btn btn-outline-success m-1" onClick={() => stock()}>
            Stock
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>


              <p>Hola {parametros.credencial.nombre} !</p>
                <button className="btn btn-outline-danger"
                    onClick={() => {
                        parametros.setCredencial(null);
                    }}
                    >
                    Salir
                </button>
                
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
