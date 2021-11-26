import { Enum } from "components/Enum";
import { Header } from "components/Header";
import { Interface } from "components/Interface";
import { Type } from "components/Type";

import { shallow } from "enzyme";

import HomePage from "./HomePage";

describe("HomePage", () => {
  it("should render HomePage", () => {
    const wrapper = shallow(<HomePage />);

    expect(
      wrapper.matchesElement(
        <div>
          <Header />
          <Enum />
          <Interface />
          <Type />
        </div>,
      ),
    );
  });
});
