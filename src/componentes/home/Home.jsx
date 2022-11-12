import "./home.css"

const Home = (parametros) => {
  
  if (parametros.home === false) {
    return <></>;
  }
  return (
    <>
      <div className="col-md-8 offset-md-2 info">
        <h1  className="inicio text-center">MiniMarket Matias</h1>
        <img className="img-inicio" alt="minimarket" src="./logo.png"></img>
        <p className="text-center">
            De la Puente a tu carrito
        </p>
        <a href="#section" className="boton-notcias btn btn-outline-light d-flex align-items-center">Noticias</a>
      </div>
      <section id="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-8 mx-auto text-center">
                <h2>Noticias</h2>
                <a href="#inicio" className="boton-notcias btn btn-outline-light d-flex align-items-center">Inicio</a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
                <div className="service card-effect">
                  <h5 className="mt-4 mb-2">Mañana llega el repositor</h5>
                  <p>El repositor de fideos llega a las 06:15am del dia lunes  </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                <div className="service card-effect">
                  <h5 className="mt-4 mb-2">Se registro una perdida</h5>
                  <p>se registro que hubo una perdida de 400 paquetes de fideo</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                <div className="service card-effect">
                  <h5 className="mt-4 mb-2">prhibido la entrada a "pedro sanches" </h5>
                  <p>el cliente "pedros sanchez" debe actualemente mas de 29.000 pesos por sacar fiado queso crema </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                <div className="service card-effect">
                  <h5 className="mt-4 mb-2">Foco de gondola roto</h5>
                  <p>El foco de la gondola A-23-33-1123-41-a-Z se encuentra quemado </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                <div className="service card-effect">
                  <h5 className="mt-4 mb-2">Mañana es feriado</h5>
                  <p>el dia de mañana se trabaja doble turno y no habra doble pago </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 ">
                <div className="service card-effect ">
                  <h5 className="mt-4 mb-2">Focos perdidos</h5>
                  <p>nos robaron mas de 2 focos  </p>
              </div>
            </div>
            
            
            </div>
            
          </div>
         

      </section>
    </>
  );
};

export { Home };

