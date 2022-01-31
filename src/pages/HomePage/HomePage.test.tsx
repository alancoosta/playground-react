import { DateFns } from "components/DateFns";

import { shallow } from "enzyme";

import HomePage from "./HomePage";

describe("HomePage", () => {
  it("should render HomePage", () => {
    const wrapper = shallow(<HomePage />);

    expect(
      wrapper.matchesElement(
        <div>
          <DateFns />
        </div>,
      ),
    ).toBeTruthy();
  });
});
