export type StatusBadge = "light" | "plus" | "vip";

export interface HeaderPropsView {
  badgeStatus: StatusBadge;
}

export enum BadgeText {
  Light = "Light",
  Plus = "Plus",
  Vip = "VIP",
}
