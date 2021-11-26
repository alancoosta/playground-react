import { shallow } from "enzyme";

import { HeaderView } from "./HeaderView";

describe("HeaderView", () => {
  it("should render HeaderView", () => {
    const wrapper = shallow(<HeaderView badgeStatus="vip" />);

    expect(wrapper.exists()).toBe(true);
  });
});
