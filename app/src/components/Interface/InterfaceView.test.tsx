import { shallow } from "enzyme";

import { InterfaceView } from "./InterfaceView";

describe("InterfaceView", () => {
  it("should render InterfaceView", () => {
    const wrapper = shallow(<InterfaceView />);

    expect(
      wrapper.matchesElement(
        <div style={{ margin: 20 }}>
          <h1>Enum</h1>
          <p />
          <h2>Small: small</h2>
          <h2>Medium: medium</h2>
          <h2>Large: large</h2>
        </div>,
      ),
    ).toBeTruthy();
  });
});
