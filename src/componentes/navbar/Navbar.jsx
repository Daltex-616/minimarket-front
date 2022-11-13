const Navbar = (parametros) => {
  const inicio = async () => {
    parametros.setHome(true);
    parametros.setCaja(false);
    parametros.setStock(false);
    parametros.setBloqueado(false);
    parametros.setFormAgregarProducto(false);
  };

  const roles = parametros.credencial.roles;

  const caja = async () => {
    const permisos = roles.find((rol) => rol.rolId === 2 || rol.rolId === 1);
    if (permisos) {
      parametros.setHome(false);
      parametros.setCaja(true);
      parametros.setStock(false);
      parametros.setBloqueado(false);
      parametros.setFormAgregarProducto(false);
      return;
    }
    parametros.setHome(false);
    parametros.setCaja(false);
    parametros.setStock(false);
    parametros.setBloqueado(true);
    parametros.setFormAgregarProducto(false);
  };

  const stock = async () => {
    const permisos = roles.find((rol) => rol.rolId === 3 || rol.rolId === 1);
    if (permisos) {
      parametros.setHome(false);
      parametros.setCaja(false);
      parametros.setStock(true);
      parametros.setBloqueado(false);
      parametros.setFormAgregarProducto(false);
      return;
    }
    parametros.setHome(false);
    parametros.setCaja(false);
    parametros.setStock(false);
    parametros.setBloqueado(true);
    parametros.setFormAgregarProducto(false);
  };

  return (
    <>
      <nav
        id="inicio"
        className="navbar navbar-expand-lg navbar-dark bg-dark box-shadow"
      >
        <div className="container-fluid">
          <a href="/#" onClick={() => inicio()}>
            <img alt="minimarket" src="./logo.png" width={"55px"}></img>
          </a>
          <button
            className="btn btn-outline-primary m-1"
            onClick={() => caja()}
          >
            Caja
          </button>
          <button
            className="btn btn-outline-primary m-1"
            onClick={() => stock()}
          >
            Stock
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <h5 className="text-white bg-dark p-2">
              Hola {parametros.credencial.nombre} !
            </h5>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                localStorage.clear();
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
