export type StatusBadge = "light" | "plus" | "vip";

export interface HeaderPropsView {
  listNavBarLinks: JSX.Element[];
  badgeStatus: StatusBadge;
}
