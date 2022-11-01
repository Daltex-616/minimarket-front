
const Bloqueado = (parametros) => {
  if(parametros.bloqueado === false){
    return (
      <>

      </>
    );
  }
  return (
    <>
      No tienes permiso para acceder a este modulo
    </>
  );
};

export { Bloqueado };
