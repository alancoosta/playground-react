import { Route, Routes } from "react-router-dom";

import { EnumView } from "components/Enum/EnumView";

import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";

import { shallow } from "enzyme";

import AppRouter from "./AppRouter";

jest.mock("../pages/HomePage");
jest.mock("../pages/NotFoundPage");

describe("AppRouter", () => {
  it("should render AppRouter", () => {
    const wrapper = shallow(<AppRouter />);

    expect(wrapper.find(Route)).toHaveLength(2);
  });
});
