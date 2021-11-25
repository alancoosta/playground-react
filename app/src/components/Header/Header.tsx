import { StatusBadge } from "./Header.types";
import { HeaderView } from "./HeaderView";

const badgeStatus: StatusBadge = "vip";

const Header = (): JSX.Element => {
  return <HeaderView badgeStatus={badgeStatus} />;
};

export default Header;
