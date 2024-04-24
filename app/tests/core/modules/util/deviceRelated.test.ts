/* eslint-disable @typescript-eslint/no-empty-function */
import deviceRelated from "@/app/core/modules/util/deviceRelated"

describe("isMobileDevice function", () => {
  beforeEach(() => {
    Object.defineProperty(window, "ontouchstart", {
      get: () => () => {},
      configurable: true,
    })
    Object.defineProperty(window.navigator, "maxTouchPoints", {
      get: () => () => {},
      configurable: true,
    })
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })

  const testUserAgents = {
    mobile: [
      "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
      "Mozilla/5.0 (Linux; Android 10; SM-A505FN) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36",
      "Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+",
    ],
    desktop: [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15",
    ],
  }

  test.each(testUserAgents.mobile)("returns true for mobile user agents: %s", (userAgent) => {
    jest.spyOn(navigator, "userAgent", "get").mockReturnValue(userAgent)
    jest.spyOn(navigator, "maxTouchPoints", "get").mockReturnValue(100)
    jest.spyOn(window, "ontouchstart", "get").mockReturnValue(() => {})

    expect(deviceRelated.isMobileDevice()).toBe(true)
  })

  test.each(testUserAgents.desktop)("returns false for desktop user agents: %s", (userAgent) => {
    jest.spyOn(navigator, "userAgent", "get").mockReturnValue(userAgent)
    jest.spyOn(navigator, "maxTouchPoints", "get").mockReturnValue(0)
    jest.spyOn(window, "ontouchstart", "get").mockReturnValue(null)
    delete window.ontouchstart

    expect(deviceRelated.isMobileDevice()).toBe(false)
  })

  test("returns true if device has touch capabilities", () => {
    jest
      .spyOn(navigator, "userAgent", "get")
      .mockReturnValue(
        "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
      )
    jest.spyOn(navigator, "maxTouchPoints", "get").mockReturnValue(100)

    expect(deviceRelated.isMobileDevice()).toBe(true)
  })

  test("returns true if 'ontouchstart' is present in window", () => {
    jest
      .spyOn(navigator, "userAgent", "get")
      .mockReturnValue(
        "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
      )
    jest.spyOn(window, "ontouchstart", "get").mockReturnValue(() => {})

    expect(deviceRelated.isMobileDevice()).toBe(true)
  })

  it("should return false when window or navigator is undefined", () => {
    const originalWindow = global.window
    const originalNavigator = global.navigator
    delete global.window
    delete global.navigator

    expect(deviceRelated.isMobileDevice()).toBe(false)

    global.window = originalWindow
    global.navigator = originalNavigator
  })

  it("should check for mobile user agent or touch capabilities when on client-side", () => {
    Object.defineProperty(global, "window", {
      value: {
        ontouchstart: {},
      },
      writable: true,
    })
    Object.defineProperty(global, "navigator", {
      value: {
        userAgent: "iphone",
        maxTouchPoints: 1,
      },
      writable: true,
    })

    expect(deviceRelated.isMobileDevice()).toBe(true)
  })
})
