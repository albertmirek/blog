import { Header } from "@/components/Header";

export async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <Header />
      <h1>Article detail page id: ${id}</h1>
    </>
  );
}
