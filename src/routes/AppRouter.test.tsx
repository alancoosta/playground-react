import { Route } from "react-router-dom";

import { shallow } from "enzyme";

import AppRouter from "./AppRouter";

describe("AppRouter", () => {
  it("should render AppRouter", () => {
    const wrapper = shallow(<AppRouter />);

    expect(wrapper.find(Route)).toHaveLength(2);
  });
});
