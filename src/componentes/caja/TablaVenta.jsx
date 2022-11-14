const TablaVenta = (parametros) => {
return(
    <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio Venta</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {parametros.productos.map((producto) => {
            return (
              <tr key={Date.now()+Math.floor(Math.random()*999)}>
                <td>{producto.nombre}</td>
                <td>{producto.precio_venta}</td>

                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
)
}

export { TablaVenta };