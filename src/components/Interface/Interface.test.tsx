import { shallow } from "enzyme";

import { Interface } from "./Interface";
import { InterfaceView } from "./InterfaceView";

describe("Interface", () => {
  it("should render Interface", () => {
    const wrapper = shallow(<Interface />);

    expect(wrapper.type()).toBe(InterfaceView);
  });
});
