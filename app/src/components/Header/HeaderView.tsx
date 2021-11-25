import { Link } from "react-router-dom";

import { SpaceXLogo } from "../../assets/svg";
import { NAVBAR_LINKS } from "./Header.constants";
import { HeaderPropsView } from "./Header.types";
import { Container } from "./HeaderView.styles";

const HeaderView = ({ badgeStatus }: HeaderPropsView): JSX.Element => {
  const badgeText: { [key: string]: string } = {
    light: "Light",
    plus: "Plus",
    vip: "VIP",
  };

  const listNavBarLinksView = NAVBAR_LINKS.map((item) => (
    <li key={item.title}>
      <Link to={item.link}>{item.title}</Link>
    </li>
  ));

  return (
    <Container>
      <div className="header--box">
        <div className="header--wrapper">
          <Link to="/" className="header--logoLink">
            <SpaceXLogo />
          </Link>

          <nav className="header--nav">
            <ul>{listNavBarLinksView}</ul>
          </nav>

          <div className={`header--badge ${badgeStatus}`}>{badgeText[badgeStatus] ?? ""}</div>
        </div>
      </div>
    </Container>
  );
};

export { HeaderView };
