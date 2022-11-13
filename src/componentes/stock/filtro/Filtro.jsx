const Filtro = (props) => {
  const { nuevo, filtro } = props;
  return (
    <div>
      <div className="input-group input-group-lg">
        <input
          value={filtro}
          onChange={nuevo}
          placeholder="Ingrese codigo de barra o nombre del producto"
          className="form-control"
        ></input>
      </div>
    </div>
  );
};

export default Filtro;
