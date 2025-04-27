import { describe, expect, it } from "vitest";
import { ApiArticleDetail } from "@/features/articles/lib/server/getArticleDetail.server";
import { sortArticlesByProperty } from "./sortArticlesByProperty";

const articles: ApiArticleDetail[] = [
  {
    articleId: "5a10f132-334d-4364-b91a-95631ed992b7",
    comments: [],
    content: "",
    createdAt: "2025-04-26T19:04:23.276Z",
    imageId: "c73c99ec-d1de-4771-89c0-a21faaa2c6f4",
    lastUpdatedAt: "2025-04-26T19:06:03.491Z",
    perex: "AAAAAAperex",
    title: "AAAAA",
  },
  {
    articleId: "5a10f132-334d-4364-b91a-95631ed992b7",
    comments: [],
    content: "",
    createdAt: "2025-04-26T19:04:23.276Z",
    imageId: "c73c99ec-d1de-4771-89c0-a21faaa2c6f4",
    lastUpdatedAt: "2025-04-26T19:06:03.491Z",
    perex: "CCCCCperex",
    title: "CCCCC",
  },
  {
    articleId: "5a10f132-334d-4364-b91a-95631ed992b7",
    comments: [],
    content: "",
    createdAt: "2025-04-26T19:04:23.276Z",
    imageId: "c73c99ec-d1de-4771-89c0-a21faaa2c6f4",
    lastUpdatedAt: "2025-04-26T19:06:03.491Z",
    perex: "BBBBperex",
    title: "BBBBB",
  },
];
describe("Sorting articles test", () => {
  it("Should sort by title asc", () => {
    const sortedTitleAsc = sortArticlesByProperty(articles, "title", "asc");

    expect(sortedTitleAsc[0].title).toBe("AAAAA");
    expect(sortedTitleAsc[1].title).toBe("BBBBB");
    expect(sortedTitleAsc[2].title).toBe("CCCCC");
  });

  it("Should sort by title desc", () => {
    const sortedTitleAsc = sortArticlesByProperty(articles, "title", "desc");

    expect(sortedTitleAsc[0].title).toBe("CCCCC");
    expect(sortedTitleAsc[1].title).toBe("BBBBB");
    expect(sortedTitleAsc[2].title).toBe("AAAAA");
  });

  it("Should sort by perex asc", () => {
    const sortedTitleAsc = sortArticlesByProperty(articles, "perex", "asc");

    expect(sortedTitleAsc[0].perex).toBe("AAAAAAperex");
    expect(sortedTitleAsc[1].perex).toBe("BBBBperex");
    expect(sortedTitleAsc[2].perex).toBe("CCCCCperex");
  });
});
