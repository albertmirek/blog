import { NextRequest } from "next/server";
import config from "@/config";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ uuid: string }> },
) {
  const { uuid } = await params;
  return await fetch(`${config.apiEndpoint}/images/${uuid}`, {
    method: "GET",
    headers: {
      "X-API-KEY": config.apiKey,
    },
  });
}
