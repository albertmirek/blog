import { NextRequest, NextResponse } from "next/server";
import config from "@/config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Routes } from "@/consts/routes";

type Image = {
  imageId: string;
  name: string;
};

export type UploadImageReturnType = Image[];
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("image");

    if (!file || !(file instanceof Blob)) {
      return NextResponse.json(
        { message: "Invalid image file" },
        { status: 400 },
      );
    }

    const forwardFormData = new FormData();
    forwardFormData.append("image", file);

    const token = (await cookies()).get("accessToken")?.value;
    if (!token || token === "") {
      redirect(`${Routes.LOGIN}?missingToken=1`);
    }

    const res = await fetch(`${config.apiEndpoint}/images`, {
      method: "POST",
      headers: {
        "X-API-KEY": config.apiKey,
        Authorization: `Bearer ${token}`,
      },
      body: forwardFormData,
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Image upload failed" },
        { status: res.status },
      );
    }

    const data = (await res.json()) as UploadImageReturnType;
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
