import { Route, Routes } from "react-router-dom";

import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";

import { shallow } from "enzyme";

import AppRouter from "./AppRouter";

describe("NotFoundPage", () => {
  it("should render NotFoundPage", () => {
    const wrapper = shallow(<AppRouter />);

    expect(
      wrapper.matchesElement(
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>,
      ),
    );
  });
});
