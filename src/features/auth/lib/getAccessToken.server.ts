import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Routes } from "@/consts/routes";

export const getAccessTokenOrLogout = async () => {
  const token = (await cookies()).get("accessToken")?.value;
  if (!token || token === "") {
    redirect(`${Routes.LOGIN}?missingToken=1`);
  }

  return token;
};
