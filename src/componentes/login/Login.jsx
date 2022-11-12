import { apiPost } from "../../utils/api.js";

const Login = (parametros) => {
  const sendForm = async (event) => {
    event.preventDefault();
    try {
      const response = await apiPost("auth/login", {
        dni: document.getElementById("dni").value,
        contraseña: document.getElementById("contraseña").value,
      });
      if (response.status === 200) {
        localStorage.setItem("credenciales", JSON.stringify(response.data));
        parametros.setCredencial(response.data);
      }
    } catch (error) {}
  };
  return (
    <>
      <div className="demo-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mx-auto">
              <div className="text-center image-size-small position-relative">
                <img
                  src="https://img.freepik.com/vector-premium/logotipo-supermercado_23-2148459011.jpg?w=740"
                  alt="logoMatias"
                  className="rounded-circle p-2 bg-white mt-4"
                ></img>
              </div>
              <div className="p-5 bg-white rounded shadow-lg">
                <h3 className="mb-2 text-center pt-5"> Minimarket Matias </h3>
                <p className="text-center lead">De La Puente a tu carrito 🛒</p>
                <form onSubmit={(event) => sendForm(event)}>
                  <label className="font-500">DNI</label>
                  <input
                    required
                    className="form-control form-control-lg mb-3"
                    id="dni"
                    type="number"
                  />
                  <label className="font-500">Contraseña</label>
                  <input
                    required
                    className="form-control form-control-lg"
                    id="contraseña"
                    type="password"
                  ></input>
                  <button
                    className="btn btn-primary btn-lg mt-4 w-100 shadow-lg"
                    type="submit"
                  >
                    ENTRAR
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
