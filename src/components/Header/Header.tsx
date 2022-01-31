import { BADGE_STATUS_TEXT_LIST } from "./Header.constants";
import { StatusBadge } from "./Header.types";
import { HeaderView } from "./HeaderView";

export const Header = (): JSX.Element => {
  const badgeStatus: StatusBadge = "plus";
  const badgeStatusText = BADGE_STATUS_TEXT_LIST[badgeStatus];

  return <HeaderView badgeStatus={badgeStatus} badgeStatusText={badgeStatusText} />;
};
