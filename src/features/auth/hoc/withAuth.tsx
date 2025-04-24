import { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Routes } from "@/consts/routes";

export function withAuth<P extends Record<string, unknown>>(
  PageComponent: (props: P) => ReactNode | Promise<ReactNode>,
): (props: P) => Promise<ReactNode> {
  return async (props: P) => {
    const token = (await cookies()).get("accessToken")?.value;
    if (!token || token === "") {
      redirect(`${Routes.LOGIN}?missingToken=1`);
    }
    return PageComponent({ ...(props as P) });
  };
}
