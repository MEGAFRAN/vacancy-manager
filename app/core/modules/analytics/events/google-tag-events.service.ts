import googleTagService from "../datalayer/google-tag-datalayer.service"

const gtmEvents = {
  addTechJobCard(data: Record<string, any>): void {
    googleTagService.feedDataLayer({ eventName: "add_tech_job_card", ...data })
  },
}
export default gtmEvents
