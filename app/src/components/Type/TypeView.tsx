type Size = "SMALL" | "MEDIUM" | "LARGE";

export const TypeView = (): JSX.Element => {
  const typeSmall: Size = "SMALL";
  const typeMedium: Size = "MEDIUM";
  const typeLarge: Size = "LARGE";

  return (
    <div style={{ margin: 20 }}>
      <h1>Type</h1>
      <p />
      <h2>Small: {typeSmall}</h2>
      <h2>Medium: {typeMedium}</h2>
      <h2>Large: {typeLarge}</h2>
    </div>
  );
};
