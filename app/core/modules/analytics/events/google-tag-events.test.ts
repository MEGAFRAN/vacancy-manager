import gtmEvents from "./google-tag-events.service"
import googleTagService from "../datalayer/google-tag-datalayer.service"

jest.mock("../datalayer/google-tag-datalayer.service")

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
})
