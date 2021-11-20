import { SpaceXLogoSVG } from "../../assets/svgs";
import { NAVBAR_LINKS } from "./Header.constants";
import { Container } from "./Header.style";

const STATUS_BADGE = "plus";

const STATUS_TEXT: { [key: string]: string } = {
  light: "Light",
  plus: "Plus",
  vip: "VIP",
};

const listNavbarLinks = NAVBAR_LINKS.map((item) => (
  <li key={item.title}>
    <a href={item.link}>{item.title}</a>
  </li>
));

const Header = () => {
  return (
    <Container>
      <div className="header--box">
        <div className="header--wrapper">
          <a href="/" className="header--logoLink">
            <SpaceXLogoSVG />
          </a>

          <nav className="header--nav">
            <ul>{listNavbarLinks}</ul>
          </nav>

          <div className={`header--badge ${STATUS_BADGE}`}>
            {STATUS_TEXT[STATUS_BADGE] ?? ""}
          </div>
        </div>
      </div>
    </Container>
  );
};

export { Header };
