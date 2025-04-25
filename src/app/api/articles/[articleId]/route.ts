import { NextRequest, NextResponse } from "next/server";
import { getAccessTokenOrLogout } from "@/features/auth/lib/getAccessToken.server";
import config from "@/config";
import { redirect } from "next/navigation";
import { Routes } from "@/consts/routes";

type UpdateArticleInputReqBody = {
  title?: string;
  perex?: string;
  imageI?: string;
  content?: string;
};

type UpdateArticleResBody = {
  articleId: string;
  title: string;
  perex: string;
  imageId: string;
  content: string;
};

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ articleId: string }> },
) {
  try {
    const { articleId } = await params;
    const token = await getAccessTokenOrLogout();
    const body = (await request.json()) as UpdateArticleInputReqBody;

    const res = await fetch(`${config.apiEndpoint}/articles/${articleId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": config.apiKey,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
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

    const data = (await res.json()) as UpdateArticleResBody;
    return NextResponse.json({ res: data }, { status: res.status });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
