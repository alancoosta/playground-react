export type StatusBadge = "light" | "plus" | "vip";

export enum BadgeStatusText {
  Light = "Light",
  Plus = "Plus",
  Vip = "VIP",
}
export interface HeaderPropsView {
  badgeStatus: StatusBadge;
  badgeStatusText: string;
}
