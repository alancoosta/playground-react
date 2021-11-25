import React from "react";

import { shallow } from "enzyme";

import App from "./App";

jest.mock("./routes/AppRouter.tsx");

describe("App", () => {
  it("render App View", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});
