import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { Routes } from "@/consts/routes";
import config from "@/config";
import { getAccessTokenOrLogout } from "@/features/auth/lib/getAccessToken.server";

type CreateArticleInput = {
  title: string;
  perex: string;
  imageId: string;
  content: string;
};

export async function POST(request: NextRequest) {
  try {
    const inputs = (await request.json()) as CreateArticleInput;
    if (
      !inputs.title ||
      inputs.title === "" ||
      !inputs.perex ||
      inputs.perex === "" ||
      !inputs.imageId ||
      inputs.imageId === "" ||
      !inputs.content ||
      inputs.content === ""
    ) {
      return NextResponse.json(
        { error: "One of required fields were not filled" },
        { status: 400 },
      );
    }

    const token = await getAccessTokenOrLogout();

    const res = await fetch(`${config.apiEndpoint}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": config.apiKey,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(inputs),
    });
    if (res.status === 403) {
      redirect(`${Routes.LOGIN}?missingToken=1`);
    }

    if (!res.ok) {
      return NextResponse.json(
        { error: "There was an error with creating article" },
        { status: res.status },
      );
    }

    const data = (await res.json()) as { articleId: string };

    return NextResponse.json({ res: data.articleId }, { status: res.status });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
