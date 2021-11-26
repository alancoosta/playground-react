enum Size {
  SMALL,
  MEDIUM,
  LARGE = "L",
}

const EnumView = (): JSX.Element => {
  return (
    <div style={{ margin: 20 }}>
      <h1>Enum</h1>
      <p>
        Por padrao, o Enum coloca o valor do enum a sua posicao no array, mas voce pode atribuir um
        valor ao enum
      </p>
      <h2>Small: {Size.SMALL}</h2>
      <h2>Medium: {Size.MEDIUM}</h2>
      <h2>Large: {Size.LARGE}</h2>
    </div>
  );
};

export { EnumView };
