import { withAuth } from "@/features/auth/hoc/withAuth";

const Page = () => {
  return <h1>Create article page</h1>;
};

export const CreateArticlePage = withAuth(Page);
