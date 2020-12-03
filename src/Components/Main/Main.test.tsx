import React from "react"
import { shallow } from "enzyme"
import Main from "./Main"

describe("Timer", () => {
  let container:any

  beforeEach(() => (container = shallow(<Main />)))

  it("should render a < main   />", () => {
    expect(container.find("main").length).toBeGreaterThanOrEqual(1)
  })
})