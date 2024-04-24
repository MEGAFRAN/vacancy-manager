import googleTagService from "./google-tag-datalayer.service"

const gtmEvents = {
  addTechJobCard(data: Record<string, any>): void {
    googleTagService.feedDataLayer({ eventName: "add_tech_job_card", ...data })
  },
  deleteTechJobCard(data: Record<string, any>): void {
    googleTagService.feedDataLayer({ eventName: "delete_tech_job_card", ...data })
  },
  installApp(data: Record<string, any>): void {
    googleTagService.feedDataLayer({ eventName: "install_app", ...data })
  },
}
export default gtmEvents
