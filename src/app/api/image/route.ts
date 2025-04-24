import { NextRequest, NextResponse } from "next/server";
import config from "@/config";

type Image = {
  imageId: string;
  name: string;
};

export type UploadImageReturnType = Image[];
export async function POST(request: NextRequest) {
  try {
    const res = await fetch(`${config.apiEndpoint}/api/images`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": config.apiKey,
      },
      body: request.body,
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
