import { Link } from "react-router-dom";

import { NAVBAR_LINKS } from "./Header.constants";
import { StatusBadge } from "./Header.types";
import { HeaderView } from "./HeaderView";

const badgeStatus: StatusBadge = "vip";

const listNavBarLinksView = NAVBAR_LINKS.map((item) => (
  <li key={item.title}>
    <Link to={item.link}>{item.title}</Link>
  </li>
));

const Header = (): JSX.Element => {
  return <HeaderView badgeStatus={badgeStatus} listNavBarLinksView={listNavBarLinksView} />;
};

export default Header;
