import { UploadImageReturnType } from "@/app/api/images/route";

export const uploadImage = async (image: string) => {
  const formData = new FormData();
  formData.append("image", image);
  const res = await fetch(`/api/images`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Failed to upload images");
  }

  return (await res.json()) as UploadImageReturnType;
};
