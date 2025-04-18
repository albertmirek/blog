import "./globals.scss";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" /*className={hind.className}*/>
      <body>{children}</body>
    </html>
  );
}
