const Bloqueado = (parametros) => {
  if (parametros.bloqueado === false) {
    return <></>;
  }
  return (
    <>
      <div class="alert alert-danger m-4" role="alert">
        No tienes permiso para acceder a este modulo
      </div>
    </>
  );
};

export { Bloqueado };
