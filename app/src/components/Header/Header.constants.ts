import { BadgeStatusText } from "./Header.types";

export const NAVBAR_LINKS = [
  {
    title: "Falcon9",
    link: "/",
  },
  {
    title: "Falcon Heavy",
    link: "/",
  },
  {
    title: "Dragon",
    link: "/",
  },
  {
    title: "Starship",
    link: "/",
  },
  {
    title: "Human Spaceflight",
    link: "/",
  },
  {
    title: "Rideshare",
    link: "/",
  },
];

export const BADGE_STATUS_TEXT_LIST: { [key: string]: string } = {
  light: BadgeStatusText.Light,
  plus: BadgeStatusText.Plus,
  vip: BadgeStatusText.Vip,
};
