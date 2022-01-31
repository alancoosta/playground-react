import { Link } from "react-router-dom";

import GoogleLogo from "assets/svg/google-logo.svg";
import "./HeaderView.styles.scss";

import { NAVBAR_LINKS } from "./Header.constants";
import { HeaderPropsView } from "./Header.types";

export const HeaderView = ({ badgeStatus, badgeStatusText }: HeaderPropsView): JSX.Element => {
  const listNavBarLinksView = NAVBAR_LINKS.map((item) => (
    <li key={item.title}>
      <Link to={item.link}>{item.title}</Link>
    </li>
  ));

  return (
    <div className="header--container">
      <div className="header--box">
        <div className="header--wrapper">
          <Link to="/" className="header--logoLink">
            <img src={GoogleLogo} alt="" />
          </Link>

          <nav className="header--nav">
            <ul>{listNavBarLinksView}</ul>
          </nav>

          <div className={`header--badge ${badgeStatus}`}>{badgeStatusText}</div>
        </div>
      </div>
    </div>
  );
};
