import { useCallback } from "react";

const HomePage = (): JSX.Element => {
  const sharedFunction = useCallback(async () => {
    navigator.share({
      title: "Title",
      text: "Text",
      url: "https://google.com",
    });
  }, []);

  return (
    <div>
      <button
        style={{
          height: 50,
          width: 250,
          border: "1px solid white",
          backgroundColor: "transparent",
          color: "white",
        }}
        type="button"
        onClick={sharedFunction}
      >
        Acessar
      </button>
    </div>
  );
};

export default HomePage;
