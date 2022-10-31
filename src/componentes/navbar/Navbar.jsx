

const Navbar = (parametros) => {

const inicio = async () => {
  parametros.setHome(true);
  parametros.setCaja(false);
  parametros.setStock(false);
};

const caja = async () => {
  roles.map((rol) => rol.rolId === 1 || rol.rolId === 2 ? parametros.setCaja(true) : parametros.setCaja(false))
  parametros.setHome(false);
  parametros.setStock(false);
 ;
};
const roles = parametros.credencial.roles;
const stock = async () => {
  parametros.setHome(false);
  parametros.setCaja(false);
  roles.map((rol) => rol.rolId === 1|| rol.rolId === 3 ? parametros.setStock(true) : parametros.setStock(false))
  
};


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark box-shadow">
        <div className="container-fluid">
         
          <button className="btn btn-outline-primary m-1" onClick={() => inicio()}>
            Inicio
          </button>
          <button className="btn btn-outline-primary m-1" onClick={() => caja()}>
            Caja
          </button>
          <button className="btn btn-outline-primary m-1" onClick={() => stock()}>
            Stock
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>


              <p className="text-white bg-dark p-2">Hola {parametros.credencial.nombre} !</p>
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
