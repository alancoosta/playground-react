import { Link } from "react-router-dom";

import GoogleLogo from "assets/svg/google-logo.svg";

import { shallow } from "enzyme";

import { HeaderView } from "./HeaderView";

describe("HeaderView", () => {
  it("should render HeaderView with badge status light", () => {
    const wrapper = shallow(<HeaderView badgeStatus="light" badgeStatusText="Light" />);

    expect(wrapper.exists()).toBe(true);
    expect(
      wrapper.matchesElement(
        <div className="header--container">
          <div className="header--box">
            <div className="header--wrapper">
              <Link to="/" className="header--logoLink">
                <img src={GoogleLogo} alt="" />
              </Link>
              <nav className="header--nav">
                <ul>
                  <li>
                    <Link to="/">Falcon9</Link>
                  </li>
                  <li>
                    <Link to="/">Falcon Heavy</Link>
                  </li>
                  <li>
                    <Link to="/">Dragon</Link>
                  </li>
                  <li>
                    <Link to="/">Starship</Link>
                  </li>
                  <li>
                    <Link to="/">Human Spaceflight</Link>
                  </li>
                  <li>
                    <Link to="/">Rideshare</Link>
                  </li>
                </ul>
              </nav>
              <div className="header--badge light">Light</div>
            </div>
          </div>
        </div>,
      ),
    ).toBeTruthy();
  });

  it("should render HeaderView with badge status plus", () => {
    const wrapper = shallow(<HeaderView badgeStatus="plus" badgeStatusText="Plus" />);

    expect(wrapper.exists()).toBe(true);
    expect(
      wrapper.matchesElement(
        <div className="header--container">
          <div className="header--box">
            <div className="header--wrapper">
              <Link to="/" className="header--logoLink">
                <img src={GoogleLogo} alt="" />
              </Link>
              <nav className="header--nav">
                <ul>
                  <li>
                    <Link to="/">Falcon9</Link>
                  </li>
                  <li>
                    <Link to="/">Falcon Heavy</Link>
                  </li>
                  <li>
                    <Link to="/">Dragon</Link>
                  </li>
                  <li>
                    <Link to="/">Starship</Link>
                  </li>
                  <li>
                    <Link to="/">Human Spaceflight</Link>
                  </li>
                  <li>
                    <Link to="/">Rideshare</Link>
                  </li>
                </ul>
              </nav>
              <div className="header--badge plus">Plus</div>
            </div>
          </div>
        </div>,
      ),
    ).toBeTruthy();
  });

  it("should render HeaderView with badge status vip", () => {
    const wrapper = shallow(<HeaderView badgeStatus="vip" badgeStatusText="VIP" />);

    expect(wrapper.exists()).toBe(true);
    expect(
      wrapper.matchesElement(
        <div className="header--container">
          <div className="header--box">
            <div className="header--wrapper">
              <Link to="/" className="header--logoLink">
                <img src={GoogleLogo} alt="" />
              </Link>
              <nav className="header--nav">
                <ul>
                  <li>
                    <Link to="/">Falcon9</Link>
                  </li>
                  <li>
                    <Link to="/">Falcon Heavy</Link>
                  </li>
                  <li>
                    <Link to="/">Dragon</Link>
                  </li>
                  <li>
                    <Link to="/">Starship</Link>
                  </li>
                  <li>
                    <Link to="/">Human Spaceflight</Link>
                  </li>
                  <li>
                    <Link to="/">Rideshare</Link>
                  </li>
                </ul>
              </nav>
              <div className="header--badge vip">VIP</div>
            </div>
          </div>
        </div>,
      ),
    ).toBeTruthy();
  });
});
