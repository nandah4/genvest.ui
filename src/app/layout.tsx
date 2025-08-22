// import type { Metadata } from "next";

import ConditionalLayout from "./ConditionalLayout";
import "./globals.css";
import Header from "@/components/layout/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`} suppressHydrationWarning>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
