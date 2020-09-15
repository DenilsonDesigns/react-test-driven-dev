import React from "react";
import { shallow } from "enzyme";
import Key from "./Key";
import { findByTestAttr } from "../../utils/testUtils";

describe("Key", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Key keyAction={jest.fn()} keyType={""} keyValue={""} />);
  });

  test("renders Key container without error", () => {
    const component = findByTestAttr(wrapper, "key-container");
    expect(component.length).toBe(1);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
