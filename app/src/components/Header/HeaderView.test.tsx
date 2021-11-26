import { shallow } from "enzyme";

import { HeaderView } from "./HeaderView";

describe("HeaderView", () => {
  it("should render HeaderView", () => {
    const wrapper = shallow(<HeaderView badgeStatus="vip" badgeStatusText="VIP" />);

    console.log(wrapper.debug());

    expect(wrapper.exists()).toBe(true);
  });
});
