import { RTL } from "components/RTL";

const HomePage = (): JSX.Element => {
  const sharedFunction = async () => {
    await navigator.share({
      title: "Title",
      text: "Text",
      url: "https://google.com",
    });
  };

  return (
    <div>
      <RTL />
      <button type="button" onClick={sharedFunction}>
        Acessar
      </button>
    </div>
  );
};

export default HomePage;
