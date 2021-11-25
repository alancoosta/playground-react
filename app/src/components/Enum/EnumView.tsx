enum Size {
  SMALL,
  MEDIUM,
  LARGE = "L",
}

const EnumView = (): JSX.Element => {
  const enumSmall = Size.SMALL;
  const enumMedium = Size.MEDIUM;
  const enumLarge = Size.LARGE;

  return (
    <div style={{ margin: 20 }}>
      <h1>Enum</h1>
      <p>
        Por padrao, o Enum coloca o valor do enum a sua posicao no array, mas voce pode atribuir um
        valor ao enum
      </p>
      <h2>Small: {enumSmall}</h2>
      <h2>Medium: {enumMedium}</h2>
      <h2>Large: {enumLarge}</h2>
    </div>
  );
};

export { EnumView };
