import { shallow } from "enzyme";

import { Header } from "./Header";
import { HeaderView } from "./HeaderView";

describe("Header", () => {
  it("should render Header", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.type()).toBe(HeaderView);
  });
});
