import { shallow } from "enzyme";

import { Button } from "./Button";

describe("Enum", () => {
  it("should render Enum", () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
