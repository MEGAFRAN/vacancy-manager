import {
  fetchGraphQL,
  extractEntries,
  getAllPages,
  getPage,
} from "@/app/core/modules/contentful/queryService"

beforeEach(() => {
  ;(global.fetch as jest.Mock) = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    }),
  )
})

afterEach(() => {
  jest.restoreAllMocks()
})

describe("fetchGraphQL", () => {
  it("should make a POST request and return data", async () => {
    const mockResponse = { data: "mockData" }
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    })

    const query = "{ yourQuery }"
    const response = await fetchGraphQL(query)

    expect(response).toEqual(mockResponse)
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("https://graphql.contentful.com/content/v1/spaces/"),
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: expect.stringContaining("Bearer"),
        },
        body: JSON.stringify({ query }),
      }),
    )
  })

  it("should handle fetch error gracefully", async () => {
    ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error("fake error"))
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {})

    const query = "{ yourQuery }"
    await fetchGraphQL(query)

    expect(consoleSpy).toHaveBeenCalledWith(new Error("fake error"))
    consoleSpy.mockRestore()
  })
})

describe("extractEntries", () => {
  it("should extract entries from response", () => {
    const mockResponse = { data: { collection: { items: ["item1", "item2"] } } }
    const entries = extractEntries(mockResponse, "collection")

    expect(entries).toEqual(["item1", "item2"])
  })
})

describe("getAllPages", () => {
  it("should fetch and extract all pages for a collection", async () => {
    const mockResponse = { data: { collection: { items: ["page1", "page2"] } } }
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    })

    const pages = await getAllPages("collection", "fields", 2)

    expect(pages).toEqual(["page1", "page2"])
  })
})

describe("getPage", () => {
  it("should fetch and extract a single page", async () => {
    const mockResponse = { data: { collection: { items: ["page"] } } }
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    })

    const page = await getPage("collection", "fields", "slug")

    expect(page).toEqual("page")
  })
})
