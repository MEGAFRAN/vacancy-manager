import googleTagService from "@/app/core/modules/analytics/google-tag-datalayer.service"
import gtmEvents from "@/app/core/modules/analytics/google-tag-events.service"

jest.mock("app/core/modules/analytics/google-tag-datalayer.service")

describe("gtmEvents", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe("add tech job card event", () => {
    it("should call feedDataLayer with the given data and default event", () => {
      const eventName = "add_tech_job_card"
      const data = { eventName, key: "value" }

      gtmEvents.addTechJobCard(data)

      expect(googleTagService.feedDataLayer).toHaveBeenCalledWith(data)
    })
  })
  describe("delete tech job card event", () => {
    it("should call feedDataLayer with the given data and default event", () => {
      const eventName = "delete_tech_job_card"
      const data = { eventName, key: "value" }

      gtmEvents.deleteTechJobCard(data)

      expect(googleTagService.feedDataLayer).toHaveBeenCalledWith(data)
    })
  })

  describe("install app", () => {
    it("should call feedDataLayer with the given data and default event", () => {
      const eventName = "install_app"
      const data = { eventName, key: "value" }

      gtmEvents.installApp(data)

      expect(googleTagService.feedDataLayer).toHaveBeenCalledWith(data)
    })
  })
})
