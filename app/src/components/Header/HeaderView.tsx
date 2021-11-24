import { Link } from "react-router-dom";

import { SpaceXLogo } from "assets/svg";

import { HeaderPropsView } from "./Header.types";
import { Container } from "./HeaderView.styles";

const HeaderView = ({ listNavBarLinksView, badgeStatus }: HeaderPropsView): JSX.Element => {
  const badgeText: { [key: string]: string } = {
    light: "Light",
    plus: "Plus",
    vip: "VIP",
  };

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
