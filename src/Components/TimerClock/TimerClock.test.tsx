import React from "react"
import { shallow } from "enzyme"
import TimerClock from "./TimerClock"

describe("Timer", () => {
  let container:any

  beforeEach(() => (container = shallow(<TimerClock />)))

  it("should render a < main   />", () => {
    expect(container.find("main").length).toBeGreaterThanOrEqual(1)
  })
})