import { ReactNode } from "react";

export function withAuth<P extends Record<string, unknown>>(
  PageComponent: (props: P) => ReactNode | Promise<ReactNode>,
): (props: P) => Promise<ReactNode> {
  return async (props: P) => {
    // const token = (await cookies()).get("sessionToken")?.value; //TODO
    return PageComponent({ ...(props as P) });
  };
}
