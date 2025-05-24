import "./globals.scss";
import React from "react";
import Head from "next/head";

export const metadata = {
  title: "Blog",
  appleWebApp: {
    title: "MyWebSite",
  },
  manifest: "./manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Blog</title>
        <meta
          name="apple-mobile-web-app-title"
          content="MyWebSite"
          key={"apple-mobile-web-app-title"}
        />
        <meta name="description" content="Single tenant blogging application" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
