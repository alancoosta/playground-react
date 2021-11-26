import { StatusBadge } from "./Header.types";
import { HeaderView } from "./HeaderView";

const badgeStatus: StatusBadge = "plus";

export const Header = (): JSX.Element => {
  return <HeaderView badgeStatus={badgeStatus} />;
};
