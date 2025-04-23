export const Routes = {
  DASHBOARD: "/",
  ABOUT: "/about",
  LOGIN: "/login",
  MY_ARTICLES: "/my-articles",
  CREATE_ARTICLE: "/article/create",
  ARTICLE_DETAIL: (id: string) => `/article/${id}`,
  EDIT_ARTICLE: (id: string) => `/article/${id}/edit`,
};
