import React from "react";
import "./login.css"

const Login = () =>{
    return(
        <div className="demo-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 mx-auto">
                        <div className="text-center image-size-small position-relative">
                            <img src="https://img.freepik.com/vector-premium/logotipo-supermercado_23-2148459011.jpg?w=740" alt="logoMatias" className="rounded-circle p-2 bg-white"></img>   
                        </div>
                        <div className="p-5 bg-white rounded shadow-lg">
                            <h3 className="mb-2 text-center pt-5"> Minimarket Matias</h3>
                            <p className="text-center lead">De la Puente a tu carrito</p>
                            <form>
                                <label className="font-500">DNI</label>   
                                <input name="" className="form-control form-control-lg mb-3" type="email"/>
                                <label class="font-500">Contraseña</label>
                                <input name="" className="form-control form-control-lg" type="password"></input>
                                <button class="btn btn-primary btn-lg w-100 shadow-lg">ENTRAR</button>
                            </form>
                            <div className="text-center pt-4">
                                <p className="m-0">no tenes una cuenta? <a href="/#" class="text-dark font-weight-bold">Click aqui!</a></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login