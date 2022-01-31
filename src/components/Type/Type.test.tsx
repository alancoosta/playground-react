import { shallow } from "enzyme";

import { Type } from "./Type";
import { TypeView } from "./TypeView";

describe("Type", () => {
  it("should render Type", () => {
    const wrapper = shallow(<Type />);

    expect(wrapper.type()).toBe(TypeView);
  });
});
