import { shallow } from "enzyme";

import { TypeView } from "./TypeView";

describe("TypeView", () => {
  it("should render TypeView", () => {
    const wrapper = shallow(<TypeView />);

    expect(
      wrapper.matchesElement(
        <div style={{ margin: 20 }}>
          <h1>Type</h1>
          <p />
          <h2>Small: SMALL</h2>
          <h2>Medium: MEDIUM</h2>
          <h2>Large: LARGE</h2>
        </div>,
      ),
    );
  });
});
