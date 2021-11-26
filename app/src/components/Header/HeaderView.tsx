import { Link } from "react-router-dom";

import { SpaceXLogo } from "assets/svg";

import { NAVBAR_LINKS } from "./Header.constants";
import { HeaderPropsView } from "./Header.types";
import { Container } from "./HeaderView.styles";

export const HeaderView = ({ badgeStatus, badgeStatusText }: HeaderPropsView): JSX.Element => {
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

          <div className={`header--badge ${badgeStatus}`}>{badgeStatusText ?? ""}</div>
        </div>
      </div>
    </Container>
  );
};
