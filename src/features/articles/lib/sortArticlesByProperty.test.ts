import { expect, test } from "@jest/globals";
import { ApiArticleDetail } from "@/features/articles/lib/server/getArticleDetail.server";
import { sortArticlesByProperty } from "@/features/articles/lib/sortArticlesByProperty";

const articles: ApiArticleDetail[] = [
  {
    articleId: "5a10f132-334d-4364-b91a-95631ed992b7",
    comments: [],
    content: "",
    createdAt: "2025-04-26T19:04:23.276Z",
    imageId: "c73c99ec-d1de-4771-89c0-a21faaa2c6f4",
    lastUpdatedAt: "2025-04-26T19:06:03.491Z",
    perex: "AAAAAA",
    title: "AAAAA",
  },
  {
    articleId: "5a10f132-334d-4364-b91a-95631ed992b7",
    comments: [],
    content: "",
    createdAt: "2025-04-26T19:04:23.276Z",
    imageId: "c73c99ec-d1de-4771-89c0-a21faaa2c6f4",
    lastUpdatedAt: "2025-04-26T19:06:03.491Z",
    perex: "CCCCC",
    title: "CCCCC",
  },
  {
    articleId: "5a10f132-334d-4364-b91a-95631ed992b7",
    comments: [],
    content: "",
    createdAt: "2025-04-26T19:04:23.276Z",
    imageId: "c73c99ec-d1de-4771-89c0-a21faaa2c6f4",
    lastUpdatedAt: "2025-04-26T19:06:03.491Z",
    perex: "BBBB",
    title: "BBBBB",
  },
];

test("sortArticlesByProperty", () => {
  const sortedTitleAsc = sortArticlesByProperty(articles, "title", "asc");
  // const sortedTitleDesc = sortArticlesByProperty(articles, "title", "desc");

  expect(sortedTitleAsc[0].title).toBe("AAAAA");
  expect(sortedTitleAsc[1].title).toBe("BBBBB");
  expect(sortedTitleAsc[2].title).toBe("CCCCC");
});
