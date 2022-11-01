import "./home.css"
const Home = (parametros) => {
  if (parametros.home === false) {
    return <></>;
  }
  return (
    <>
      <div className="col-md-8 offset-md-2 info">
        <h1 className="text-center">MiniMarket Matias</h1>
        <p className="text-center">
            De la Puente a tu carrito
        </p>
      </div>
      <section id="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-8 mx-auto text-center">
                <h2>Noticias</h2>
                <p>somos una empresa dedidaca a la venta de comidita</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
                <div className="service card-effect">
                  <h5 className="mt-4 mb-2">service</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laboriosam. Repudiandae aliquam aut </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                <div className="service card-effect">
                  <h5 className="mt-4 mb-2">service</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laboriosam. Repudiandae aliquam aut </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                <div className="service card-effect">
                  <h5 className="mt-4 mb-2">service</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laboriosam. Repudiandae aliquam aut lordo legislattion </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                <div className="service card-effect">
                  <h5 className="mt-4 mb-2">service</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laboriosam. Repudiandae aliquam aut atium emperor final </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                <div className="service card-effect">
                  <h5 className="mt-4 mb-2">service</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laboriosam. Repudiandae aliquam autv  saajlje imperium latinum </p>
              </div>
            
            
            </div>
            
          </div>

        </div>

      </section>
    </>
  );
};

export { Home };

