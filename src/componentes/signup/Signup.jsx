import { useState } from "react";
import React from "react";
import {apiPost} from "../../utils/api.js";
import "./singnup.css"


const Signup = () => {

    const[nombre,setName]=useState("")
    const[apellido,setApellido]=useState("")
    const[contraseña,setContrasenia]=useState("")
    const[dni,setDni]=useState("")
    const[fecha_nacimiento, setFecha_nacimiento]=useState("")
    const[fecha_ingreso, setFecha_ingreso]=useState("")
 

 async  function signUp(){
        let data={dni:+dni,nombre,apellido,contraseña,fecha_nacimiento,fecha_ingreso}
    if( data.nombre !== "" &&
        data.apellido !== "" &&
        data.contraseña !== "" &&
        data.fecha_ingreso !== "" &&
        data.fecha_nacimiento !== ""){
        await apiPost("auth/registrar",data)
        data={
         dni,
         nombre,
         apellido,
         contraseña,
         fecha_nacimiento,
         fecha_ingreso
        }
        setDni("")
        setName("")
        setApellido("")
        setFecha_nacimiento("")
        setFecha_ingreso("")
        setContrasenia("") 
        alert("cuenta creada con exito")
    }else{
        alert("Faltan datos")
    }
    }

  return (
    <>
        <div className="col-sm-6 offset-sm-3 ">
            <h1 className="titulo-reg">registrate</h1> 
            <h4>Numero de documento</h4>
            <input type="number" value={dni} onChange={(e)=>setDni(e.target.value)} className="form-control" placeholder="D.N.I"/>
            <br/>
            <h4>Nombre</h4>
            <input type="text" value={nombre} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Nombre"/>
            <br></br>
            <h4>Apellido</h4>
            <input type="text" value={apellido} onChange={(e)=>setApellido(e.target.value)} className="form-control" placeholder="Apellido"/>
            <br></br>
            <h4>Fecha de nacimiento</h4>
            <input type="date" value={fecha_nacimiento} onChange={(e)=>setFecha_nacimiento(e.target.value)} className="form-control" placeholder="Apellido"/>
            <br></br>
            <h4>Fecha de ingreso</h4>
            <input type="date" value={fecha_ingreso} onChange={(e)=>setFecha_ingreso(e.target.value)} className="form-control" placeholder="Apellido"/>
            <br></br>
            <h4>Contraseña</h4>
            <input type="password" value={contraseña} onChange={(e)=>setContrasenia(e.target.value)} className="form-control" placeholder="Contraseña"/>
            <br/>
           
            <button className="btn btn-outline-success" onClick={signUp}>registrar</button>

        </div>
    </>
  )
}

export {Signup}