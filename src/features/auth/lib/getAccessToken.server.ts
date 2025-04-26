import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Routes } from "@/consts/routes";

export const getAccessTokenOrLogout = async (withoutQueryParam?: boolean) => {
  const token = (await cookies()).get("accessToken")?.value;
  if (!token || token === "") {
    redirect(`${Routes.LOGIN}${withoutQueryParam ? "" : "?missingToken=1"}`);
  }

  return token;
};
