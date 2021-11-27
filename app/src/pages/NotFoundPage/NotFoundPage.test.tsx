import { shallow } from "enzyme";

import NotFoundPage from "./NotFoundPage";

describe("NotFoundPage", () => {
  it("should render NotFoundPage", () => {
    const wrapper = shallow(<NotFoundPage />);

    expect(wrapper.matchesElement(<h1>Pagina nao encontrada.</h1>)).toBeTruthy();
  });
});
