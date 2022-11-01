const Home = (parametros) => {
  if (parametros.home === false) {
    return <></>;
  }
  return (
    <>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="cover-heading pt-4">MiniMarket Matias</h1>
          <p className="lead">De La Puente a tu carrito</p>
        </div>
      </section>
      <div className="albun py-5 m-4">
        <div className="row">
          <div className="col-md-4 pb-2 ">
            <div className="card md-4 alert alert-dark border border-secondary rounded-to">
              <h3>noticias</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                doloremque, eum praesentium unde deleniti necessitatibus facilis
                error culpa? Temporibus facere nulla odio provident, dolor totam
                explicabo eos ex voluptates commodi!
              </p>
            </div>
          </div>
          <div className="col-md-4 pb-2">
            <div className="card md-4 alert alert-dark border border-secondary rounded-to">
              <h3>noticias</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                doloremque, eum praesentium unde deleniti necessitatibus facilis
                error culpa? Temporibus facere nulla odio provident, dolor totam
                explicabo eos ex voluptates commodi!
              </p>
            </div>
          </div>
          <div className="col-md-4 pb-2">
            <div className="card md-4 alert alert-dark border border-secondary rounded-to">
              <h3>noticias</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                doloremque, eum praesentium unde deleniti necessitatibus facilis
                error culpa? Temporibus facere nulla odio provident, dolor totam
                explicabo eos ex voluptates commodi!
              </p>
            </div>
          </div>
          <div className="col-md-4 pb-2">
            <div className="card md-4 alert alert-dark border border-secondary rounded-to">
              <h3>noticias</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                doloremque, eum praesentium unde deleniti necessitatibus facilis
                error culpa? Temporibus facere nulla odio provident, dolor totam
                explicabo eos ex voluptates commodi!
              </p>
            </div>
          </div>
          <div className="col-md-4 pb-2">
            <div className="card md-4 alert alert-dark border border-secondary rounded-to">
              <h3>noticias</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                doloremque, eum praesentium unde deleniti necessitatibus facilis
                error culpa? Temporibus facere nulla odio provident, dolor totam
                explicabo eos ex voluptates commodi!
              </p>
            </div>
          </div>
          <div className="col-md-4 pb-2">
            <div className="card md-4 alert alert-dark border border-secondary rounded-to">
              <h3>noticias</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                doloremque, eum praesentium unde deleniti necessitatibus facilis
                error culpa? Temporibus facere nulla odio provident, dolor totam
                explicabo eos ex voluptates commodi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Home };

