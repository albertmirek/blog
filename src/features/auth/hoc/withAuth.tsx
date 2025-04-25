import { ReactNode } from "react";
import { getAccessTokenOrLogout } from "@/features/auth/lib/getAccessToken.server";

export function withAuth<P extends Record<string, unknown>>(
  PageComponent: (props: P) => ReactNode | Promise<ReactNode>,
): (props: P) => Promise<ReactNode> {
  return async (props: P) => {
    await getAccessTokenOrLogout();
    return PageComponent({ ...(props as P) });
  };
}
