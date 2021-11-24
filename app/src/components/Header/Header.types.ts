export type StatusBadge = "light" | "plus" | "vip";

export interface HeaderPropsView {
  listNavBarLinksView: JSX.Element[];
  badgeStatus: StatusBadge;
}
