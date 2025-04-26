import { FC } from "react";
import { Header } from "../../../../ui/Header";
import { getAccessTokenOrLogout } from "@/features/auth/lib/getAccessToken.server";

export const AboutPage: FC = async () => {
  await getAccessTokenOrLogout();
  return (
    <>
      <Header />
      <h1>About page</h1>
    </>
  );
};
