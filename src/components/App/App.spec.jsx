import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render a <div/>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Calculator Component", () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });
});

// Write Calculator Shallow Rendering Test

// https://testdriven.io/blog/tdd-with-react-jest-and-enzyme-part-one/#project-overview
