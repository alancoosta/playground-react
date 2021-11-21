import { Link } from "react-router-dom";

import { NAVBAR_LINKS } from "./Header.constants";
import { StatusBadge } from "./Header.types";
import { HeaderView } from "./HeaderView";

const badgeStatus: StatusBadge = "vip";

const listNavBarLinks = NAVBAR_LINKS.map((item) => (
  <li key={item.title}>
    <Link to={item.link}>{item.title}</Link>
  </li>
));

const Header = (): JSX.Element => {
  return <HeaderView badgeStatus={badgeStatus} listNavBarLinks={listNavBarLinks} />;
};

export default Header;
