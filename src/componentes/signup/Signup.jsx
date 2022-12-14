import { useState } from "react";
import React from "react";
import { apiPost, apiGet, apiPut } from "../../utils/api.js";
import "./singnup.css";

const Signup = (parametros) => {
  const [usuarios, setUsuarios] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [nombre, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [contraseña, setContrasenia] = useState("");
  const [dni, setDni] = useState("");
  const [fecha_nacimiento, setFecha_nacimiento] = useState("");
  const [fecha_ingreso, setFecha_ingreso] = useState("");
  const [showModalUsuarioGuardar, setShowModalUsuarioGuardar] = useState(true);
  const [showModalRol, setShowModalRol] = useState(true);
  const [showResitro, setShowRegistro] = useState(true);
  const [edit, setEdit] = useState(true);
  const [registro, setRegistro] = useState(true);
  // ***************** mostrar/ ocultar componentes ****************************
  const modalUsuarios = (usuario) => {
    setRegistro(false);
    setEdit(false);
    setShowRegistro(false);
    setDni(usuario.dni);
    setName(usuario.nombre);
    setApellido(usuario.apellido);
    setFecha_nacimiento(usuario.fecha_nacimiento);
    setFecha_ingreso(usuario.fecha_ingreso);
  };
  const modalRol = (usuario) => {
    setShowModalRol(false);
    setDni(usuario.dni);
  };
  const mostrarRegistrar = () => {
    setShowRegistro(false);
    setRegistro(true);
    setEdit(true);
  };
  const cancelarReg = () => {
    setShowRegistro(true);
    setShowModalRol(true);
  };
  // ********************************** editar usuario *******************************
  const guardarUsuario = async (
    dni,
    nombre,
    apellido,
    fecha_nacimiento,
    fecha_ingreso
  ) => {
    let data = {
      dni: document.getElementById("dni").value,
      nombre: document.getElementById("nombre").value,
      apellido: document.getElementById("apellido").value,
      fecha_nacimiento: document.getElementById("fecha_naci").value,
      fecha_ingreso: document.getElementById("fecha_ingreso").value,
    };
    console.log(data);
    if (
      nombre !== "" &&
      apellido !== "" &&
      fecha_ingreso !== "" &&
      fecha_nacimiento !== ""
    ) {
      await apiPut("usuarios", data);
      data = {
        dni,
        nombre,
        apellido,
        contraseña,
        fecha_nacimiento,
        fecha_ingreso,
      };
    }
    setShowModalUsuarioGuardar(true);
    setShowRegistro(true);
    setDni("");
    setName("");
    setApellido("");
    setFecha_nacimiento("");
    setFecha_ingreso("");
    setContrasenia("");
    alert("cuenta editada con exito");
  };
  // ********************* api fetch ******************
  React.useEffect(() => {
    const users = async () => {
      const resultados = await apiGet("usuarios", parametros.credencial.token);
      setUsuarios(resultados.data);
      setTablaUsuarios(resultados.data);
    };
    users();
  }, [parametros.credencial.token]);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };
  // ******************* buscar usuario ********************
  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
      if (
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.apellido
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.dni.toString().includes(terminoBusqueda)
      ) {
        return elemento;
      }
      return false;
    });
    setUsuarios(resultadosBusqueda);
  };
  // **********************crear usuairo ************************
  const signUp = async () => {
    let data = {
      dni: +dni,
      nombre,
      apellido,
      contraseña,
      fecha_nacimiento,
      fecha_ingreso,
    };
    if (
      data.nombre !== "" &&
      data.apellido !== "" &&
      data.contraseña !== "" &&
      data.fecha_ingreso !== "" &&
      data.fecha_nacimiento !== ""
    ) {
      await apiPost("auth/registrar", data);
      data = {
        dni,
        nombre,
        apellido,
        contraseña,
        fecha_nacimiento,
        fecha_ingreso,
      };
      setDni("");
      setName("");
      setApellido("");
      setFecha_nacimiento("");
      setFecha_ingreso("");
      setContrasenia("");
      alert("cuenta creada con exito");
    } else {
      alert("Faltan datos");
    }
  };
  if (!parametros.signup) {
    return <></>;
  }
  // **************** crear rol ******************
  const singnUpRol = async (dni, rol) => {
    let data = {
      dni: document.getElementById("dni-rol").value,
      rol: document.getElementById("rol").value,
    };
    console.log(data);
    await apiPost("rol", data);
    data = {
      dni,
      rol,
    };
    setShowModalRol(true);
  };

  return (
    <>
      {/* filtro y boton de despliege de resistro */}
      <div>
        <div className="containerInput">
          <input
            className="form-control inputBuscar d-inline m-4"
            value={busqueda}
            placeholder="buscar por Nombre, apellido o dni"
            onChange={handleChange}
          />
          <a href="#registrar">
            <button
              onClick={mostrarRegistrar}
              className="btn btn-success .position-absolute top-0 end-0 "
            >
              Registrar Usuario
            </button>
          </a>
          {/* *******************Tabla Usuarios**************** */}
        </div>
        <div >
          <table className="table table-sm table-bordered font-weight-bold">
            <thead>
              <tr>
                <th>ID</th>
                <th>Dni</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody >
              {usuarios &&
                usuarios.map((usuario) => (
                  <tr key={usuario.id}>
                    <td className="font-weight-900">{usuario.id}</td>
                    <td className="font-weight-900">{usuario.dni}</td>
                    <td className="font-weight-900">{usuario.nombre}</td>
                    <td className="font-weight-900">{usuario.apellido}</td>
                    <td className="font-weight-900">
                      <a href="#registrar">
                        <button
                          onClick={() => modalUsuarios(usuario)}
                          type="button"
                          className="btn btn-warning m-1"
                          title="Editar"
                        >
                          <i className="bi bi-pencil-square"></i>
                        </button>
                      </a>
                      <a href="#roles">
                        <button
                          onClick={() => modalRol(usuario)}
                          type="button"
                          className="btn btn-light m-1"
                          title="Agregar rango"
                        >
                          <i className="bi bi-box-arrow-right"></i>
                        </button>
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* *****************Registrar usuarios************************ */}
      {!showResitro && (
        <div className="col-sm-6 offset-sm-3 ">
          {showModalUsuarioGuardar && (
            <h1 id="registrar" className="titulo-reg">
              Usuarios
            </h1>
          )}
          <h4>Numero de documento</h4>
          <input
            id="dni"
            type="number"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            className="form-control"
            placeholder="D.N.I"
          />
          <br />
          <h4>Nombre</h4>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Nombre"
          />
          <br></br>
          <h4>Apellido</h4>
          <input
            id="apellido"
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="form-control"
            placeholder="Apellido"
          />
          <br></br>
          <h4>Fecha de nacimiento</h4>
          <input
            id="fecha_naci"
            type="date"
            value={fecha_nacimiento}
            onChange={(e) => setFecha_nacimiento(e.target.value)}
            className="form-control"
            placeholder="Apellido"
          />
          <br></br>
          <h4>Fecha de ingreso</h4>
          <input
            id="fecha_ingreso"
            type="date"
            value={fecha_ingreso}
            onChange={(e) => setFecha_ingreso(e.target.value)}
            className="form-control"
            placeholder="Apellido"
          />
          <br></br>

          {showModalUsuarioGuardar && <h4>Contraseña</h4>}
          {showModalUsuarioGuardar && (
            <input
              type="password"
              value={contraseña}
              onChange={(e) => setContrasenia(e.target.value)}
              className="form-control"
              placeholder="Contraseña"
            />
          )}
          <br />
          {showModalUsuarioGuardar && (
            <button
              onClick={cancelarReg}
              className="btn btn-outline-secondary me-4"
            >
              Cancelar
            </button>
          )}
          {registro && (
            <button className="btn btn-outline-success" onClick={signUp}>
              registrar
            </button>
          )}
          {!showModalUsuarioGuardar && (
            <button
              onClick={cancelarReg}
              className="btn btn-outline-secondary me-4"
            >
              Cancelar
            </button>
          )}
          {!edit && (
            <button
              className="btn btn-outline-warning "
              onClick={guardarUsuario}
            >
              Editar
            </button>
          )}
          {/* *********************formulario rol************************ */}
          <br></br>
        </div>
      )}
      <div className="col-sm-6 offset-sm-3 ">
        {!showModalRol && <h4 id="roles">Rol del usuario</h4>}

        {!showModalRol && (
          <select
            id="rol"
            className="form-select form-select-lg mb-3 "
            aria-label=".form-select-lg example"
          >
            <option value={"DEFAULT"}>Abrir para seleccionar rol</option>
            <option value={1}>Sistema</option>
            <option value={2}>Cajero</option>
            <option value={3}>Repositor</option>
          </select>
        )}
        <br></br>
        {!showModalRol && <h4>Numero de documento</h4>}
        {!showModalRol && (
          <input
            id="dni-rol"
            type="number"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            className="form-control"
            placeholder="D.N.I"
          />
        )}
        <br />
        {!showModalRol && (
          <button
            onClick={cancelarReg}
            className="btn btn-outline-secondary me-4"
          >
            Cancelar
          </button>
        )}
        {!showModalRol && (
          <button className="btn btn-outline-warning " onClick={singnUpRol}>
            Agregar rol
          </button>
        )}
      </div>
    </>
  );
};
export { Signup };