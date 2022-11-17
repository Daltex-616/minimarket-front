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
      </div>
      <section id="section">
      </section>
    </>
  );
};

export { Home };

