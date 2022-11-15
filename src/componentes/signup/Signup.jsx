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

  const modalUsuarios = (usuario) => {
    setShowModalUsuarioGuardar(false);
    setDni(usuario.dni);
    setName(usuario.nombre);
    setApellido(usuario.apellido);
    setFecha_nacimiento(usuario.fecha_nacimiento);
    setFecha_ingreso(usuario.fecha_ingreso);
  };

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
    }
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
    ;

    setShowModalUsuarioGuardar(true);
    setDni("");
    setName("");
    setApellido("");
    setFecha_nacimiento("");
    setFecha_ingreso("");
    setContrasenia("");
    alert("cuenta editada con exito");
  };

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
    setUsuarios(resultadosBusqueda)
  };

  async function signUp() {
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
  }
  if (!parametros.signup) {
    return <></>;
  }

  return (
    <>
      <div>
        <div className="containerInput">
          <input
            className="form-control inputBuscar"
            value={busqueda}
            placeholder="buscar por Nombre, apellido o dni"
            onChange={handleChange}
          />
        </div>
        <div className="table-responsive">
          <table className="table table-sm table-bordered">
            <thead>
              <tr>
                <th>id</th>
                <th>dni</th>
                <th>nombre</th>
                <th>apellido</th>
                <th>acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios &&
                usuarios.map((usuario) => (
                  <tr key={usuario.id}>
                    <td >{usuario.id}</td>
                    <td>{usuario.dni}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.apellido}</td>
                    <td>
                      <button
                        onClick={() => modalUsuarios(usuario)}
                        type="button"
                        className="btn btn-warning m-1"
                        title="Editar"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-light m-1"
                        title="Agregar rango"
                      >
                        <i className="bi bi-box-arrow-right"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="col-sm-6 offset-sm-3 ">
        <h1 className="titulo-reg">registrate</h1>
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

        {showModalUsuarioGuardar && <button className="btn btn-outline-success" onClick={signUp}>
          registrar
        </button>}
        {!showModalUsuarioGuardar && <button className="btn btn-outline-warning " onClick={guardarUsuario}>
          Editar
        </button>}
      </div>
    </>
  );
};

export { Signup };
