import { shallow } from "enzyme";

import { EnumView } from "./EnumView";

describe("EnumView", () => {
  it("should render EnumView", () => {
    const wrapper = shallow(<EnumView />);

    expect(
      wrapper.matchesElement(
        <div style={{ margin: 20 }}>
          <h1>Enum</h1>
          <p>
            Por padrao, o Enum coloca o valor do enum a sua posicao no array, mas voce pode atribuir
            um valor ao enum
          </p>
          <h2>Small: 0</h2>
          <h2>Medium: 1</h2>
          <h2>Large: L</h2>
        </div>,
      ),
    );
  });
});
