import { withAuth } from "@/features/auth/hoc/withAuth";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div>
      <h1>Edit article ${id}</h1>
    </div>
  );
}
export const EditArticlePage = withAuth(Page);
