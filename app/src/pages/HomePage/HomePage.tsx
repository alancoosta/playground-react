import { Enum } from "components/Enum";
import { Header } from "components/Header";
import { Interface } from "components/Interface";
import { Type } from "components/Type";

const HomePage = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Enum />
      <Interface />
      <Type />
    </div>
  );
};

export default HomePage;
