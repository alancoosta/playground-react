interface Size {
  small: string;
  medium: string;
  large: string;
}

export const InterfaceView = (): JSX.Element => {
  const sizes: Size = {
    small: "small",
    medium: "medium",
    large: "large",
  };

  return (
    <div style={{ margin: 20 }}>
      <h1>Enum</h1>
      <p />
      <h2>Small: {sizes.small}</h2>
      <h2>Medium: {sizes.medium}</h2>
      <h2>Large: {sizes.large}</h2>
    </div>
  );
};
