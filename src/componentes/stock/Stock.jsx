
const Stock = (parametros) => {
  if(parametros.stock === false){
    return (
      <>
      </>
    );
  }
  return (
    <>
      Stock
      <div className="container">
      <table class="table table-xl table-bordered table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio de Venta</th>
      <th scope="col">Stock(Salon/Deposito)</th>
      <th scope="col">Stock Total</th>
      <th scope="col">Ubicacion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>FIDEOS MOSTACHOL/TALLARIN/SPAGUETTI 500G</td>
      <td>$120,00</td>
      <td>850/1000</td>
      <td>1850</td>
      <td>A1</td>
    </tr>
    <tr className="bg-warning">
      <th scope="row">2</th>
      <td>LECHE CHOCOLATADA 200ML</td>
      <td>$683,35</td>
      <td>25/500</td>
      <td>525</td>
      <td>A2</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>BAGLEY SURTIDO 398G</td>
      <td>$343,75</td>
      <td>800/1000</td>
      <td>1800</td>
      <td>A1</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>TOMATE PELADO PERITA 400G</td>
      <td>$325,00</td>
      <td>800/1000</td>
      <td>1800</td>
      <td>A3</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>MERMELADA DE DAMASCO 454G</td>
      <td>$315,00</td>
      <td>500/1000</td>
      <td>1500</td>
      <td>A3</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>BROWNIES EXQUISITA</td>
      <td>$367,50</td>
      <td>300/1000</td>
      <td>300</td>
      <td>A1</td>
    </tr>
  </tbody>
</table>
</div>
    </>
  );
};

export { Stock };