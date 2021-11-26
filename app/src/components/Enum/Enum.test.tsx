import { shallow } from "enzyme";

import { Enum } from "./Enum";
import { EnumView } from "./EnumView";

describe("Enum", () => {
  it("should render Enum", () => {
    const wrapper = shallow(<Enum />);

    expect(wrapper.type()).toBe(EnumView);
  });
});
